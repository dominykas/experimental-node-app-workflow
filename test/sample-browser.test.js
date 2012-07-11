if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof buster === 'undefined') { var buster = require("buster"); }

define("test/sample-browser.test", ["../src/sample-browser"], function(sample) {

	buster.testCase("sample", {

		"should have window, not module": function() {
			refute(sample.hasModule);
			assert(sample.hasWindow);
		}

	});

});
