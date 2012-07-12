if (typeof define !== 'function') { var define = require('amdefine')(module); }

define("test/sample-browser.test", ["buster", "../src/sample-browser"], function(buster, sample) {

	buster.testCase("sample", {

		"should have window, not module": function() {
			refute(sample.hasModule);
			assert(sample.hasWindow);
		}

	});

});
