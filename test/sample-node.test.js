if (typeof define !== 'function') { var define = require('amdefine')(module); }

define("test/sample-node.test", ["buster", "../src/sample-node"], function(buster, sample) {

	buster.testCase("sample", {

		"should have module, not window": function() {
			assert(sample.hasModule);
			refute(sample.hasWindow);
		}

	});

});
