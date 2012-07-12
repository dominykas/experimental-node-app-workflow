if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	return {
		register: function(app, pkg, handlerFunc)
		{
			var routes = require("../"+pkg+"/routes-common.js");
			for(var i in routes) {
				var r = routes[i];
				app.get(r.route, handlerFunc("GET", pkg, r));
				app.post(r.route, handlerFunc("POST", pkg, r));
			}
		}
	}

});
