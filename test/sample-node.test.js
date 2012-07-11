if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof buster === 'undefined') { var buster = require("buster"); }

define("test/sample-node.test", ["../src/sample-node"], function(sample) {

	buster.testCase("sample", {

		"should have module, not window": function() {
			assert(sample.hasModule);
			refute(sample.hasWindow);
		}

	});

});
