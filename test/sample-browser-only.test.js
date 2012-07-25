if (typeof define !== 'function') { var define = require('amdefine')(module); }

define("test/sample-browser-only.test", ["buster", "../src/sample-browser-only"], function(buster, sample) {

	buster.testCase("sample-browser-only", {

		requiresSupportFor: { "DOM": typeof document != "undefined" },

		"should have window, not module": function() {
			refute(sample.hasModule);
			assert(sample.hasWindow);
		}

	});

});
