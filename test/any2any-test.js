if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof buster === 'undefined') { var buster = require("buster"); }

define(["../src/any2any", "../src/roman2dec", "../src/dec2roman"], function(any2any, roman2dec, dec2roman) {

	buster.testCase("any2any", {

		"should use dec2roman when number passed": function() {

			this.stub(dec2roman, "convert").returns("roman");
			this.stub(roman2dec, "convert").returns("decimal");

			var result = any2any.convert(1);
			assert.equals(result, "roman");

			assert.calledOnce(dec2roman.convert);
			refute.called(roman2dec.convert);

		},

		"should use roman2dec when non-number passed": function() {

			this.stub(dec2roman, "convert").returns("roman");
			this.stub(roman2dec, "convert").returns("decimal");

			var result = any2any.convert("i");
			assert.equals(result, "decimal");

			assert.calledOnce(roman2dec.convert);
			refute.called(dec2roman.convert);

		},

		"should be able convert number back and forth": function() {

			// integration
			var result = any2any.convert(any2any.convert(1999));
			assert.equals(result, 1999);

		},

		"should be able convert roman back and forth": function() {

			// integration
			var result = any2any.convert(any2any.convert("mcmxcix"));
			assert.equals(result, "mcmxcix");

		}

	})

});