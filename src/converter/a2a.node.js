if (typeof define !== 'function') { var define = require('amdefine')(module); }


// note: no TDD - for the purposes of this excercise, this is the same as d2r
define(function(){

	return {

		GET: function(req, res) {
			var data = {};
			data.title = "Decimal/Roman to Roman/Decimal";
			if (req.query.num) {
				data.input = req.query.num;
				data.result = require('../any2any').convert(req.query.num);
			}
			res.render("form", data);
		}

	};

});