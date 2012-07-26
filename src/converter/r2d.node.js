if (typeof define !== 'function') { var define = require('amdefine')(module); }

// note: no TDD - for the purposes of this excercise, this is the same as d2r
define(function(){

	return {

		GET: function(req, res) {
			var data = {};
			data.title = "Roman to Decimal";
			if (req.query.num) {
				data.input = req.query.num;
				data.result = require('../roman2dec').convert(req.query.num);
			}
			res.render("converter/form", data);
		}

	};

});