if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	var languages = ["en","de","fr","es","ru","cn"]; // @todo: this should go into some config...

	function decorate(route)
	{
		if (route == '/') {
			return '/:lang('+languages.join('|')+')?'; // @todo: duplicate content at / and /en
		} else {
			return '/:lang('+languages.join('|')+')'+route;
		}
	}

	return {
		register: function(app, pkg, handlerFunc)
		{
			var routes = require("../"+pkg+"/routes.js");
			for(var i in routes) {
				var r = routes[i];
				app.get(decorate(r.route), handlerFunc("GET", pkg, r));
				app.post(decorate(r.route), handlerFunc("POST", pkg, r));
			}
		}
	}

});
