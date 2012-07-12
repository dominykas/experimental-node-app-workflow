if (typeof define !== 'function') { var define = require('amdefine')(module); }

define("test/converter/d2r-node.test", ["buster", "../../src/converter/d2r-node", "../../src/dec2roman-common"], function(buster, d2r, dec2roman){

	buster.testCase("d2r-node", {

		"should render view": function() {
			var res = {render: this.stub()};

			d2r.GET({query:{}}, res);

			assert.calledOnce(res.render);
			assert.calledWith(res.render, "form", {
				title: "Decimal to Roman"
			});
		},

		"should calc results": function() {
			var res = {render: this.stub()};

			// note: see below for stubbed dec2roman
			d2r.GET({query:{num:3}}, res);

			assert.calledOnce(res.render);
			assert.calledWith(res.render, "form", {
				title: "Decimal to Roman",
				input: 3,
				result: 'iii'
			});
		},

		"should call dec2roman": function() {
			var res = {render: this.stub()};

			this.stub(dec2roman, "convert").returns("stubbed result");

			d2r.GET({query:{num:3}}, res);

			assert.calledOnce(dec2roman.convert);
			assert.calledWith(dec2roman.convert, 3);
		}

	});

});