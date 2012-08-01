if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This is a library, which emits events, and is used by the actual system under test
 *
 * @param failing
 * @param failmsg
 * @constructor
 */
function AsyncStuffLib(failing, failmsg) {
	this.count = 0;
	this.failing = failing;
	this.failmsg = failmsg || "WTF";
	this.queueMeh();
}
require('util').inherits(AsyncStuffLib, require('events').EventEmitter);
AsyncStuffLib.prototype.queueMeh = function () {
	setTimeout(this.meh.bind(this), Math.floor(Math.random() * 5));
};
AsyncStuffLib.prototype.meh = function () {
	this.count++;
	this.emit("meh", this.count);
	if (this.count == 5) {
		if (this.failing) {
			this.emit("error", new Error(this.failmsg));
		} else {
			this.emit("done", this.count);
		}
	} else {
		this.queueMeh();
	}
};

/**
 * This is the method being tested
 *
 * @param failInner
 * @param failOuter
 * @return {*}
 */
function doStuff(failInner, failOuter) {
	var Q = require("q");
	var myPromise = Q.defer();
	var allPromises = [];

	var parser = new AsyncStuffLib(!!failOuter, "Outer WTF");

	var onError = function (e) {
		myPromise.reject(e);
	};

	parser.on("meh", function (current) {

		//console.log("Outer",current)

		var innerPromise = Q.defer();
		allPromises.push(innerPromise.promise);

		new AsyncStuffLib(!!failInner)
			.on("meh", function (innerCurrent) {
				//console.log("Inner",current,innerCurrent);
			})
			.on("done", function (c) {
				//console.log("Inner",current,"done");
				innerPromise.resolve(c);
			})
			.on("error", function (e) {
				innerPromise.reject(e);
			});

	});
	parser.on("done", function (c) {
		//console.log("Outer done");
		Q.all(allPromises)
			.then(function (otherCounts) {
				//console.log("Inners done");
				myPromise.resolve([c, otherCounts]);
			}, onError)
			.end();
	});
	parser.on("error", onError);

	return myPromise.promise;
}

define("test/sample-q.test.node", ["buster"], function (buster) {

	buster.testCase("sample-q.node", {

		"test ok":function (done) {
			doStuff()
				.then(function (counts) {

					expect(counts).toEqual([5, [5, 5, 5, 5, 5]]);

				})
				.fail(this.mock().never())
				.fin(done).end();
		},
		"test failInner":function (done) {
			doStuff(true)
				.then(this.mock().never())
				.fail(function (e) {

					expect(e.message).toEqual("WTF");

				})
				.fin(done).end();
		},
		"test failOuter":function (done) {
			doStuff(false, true)
				.then(this.mock().never())
				.fail(function (e) {

					expect(e.message).toEqual("Outer WTF");

				})
				.fin(done).end();
		}


	})

});