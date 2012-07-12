if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	return {

		GET: function(req, res) {
			var data = {};
			data.title = "Decimal to Roman";
			 if (req.query.num) {
				data.input = req.query.num;
				data.result = require('../dec2roman-common').convert(req.query.num);
			}
			res.render("form", data);
		}

	};

});