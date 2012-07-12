if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	return {
		GET: function(req, res) {
			res.render("index");
		}
	}

})