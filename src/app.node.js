var express = require('express'),
	app = express.createServer();

var useMinified = false;

app.configure(function(){
	app.set("views", __dirname);
	app.set('view engine', 'hbs');
	require("./util/partials.node").register(__dirname);

	if (useMinified) {
		app.use(express.static(__dirname + '/../min/'));
	} else {
		app.use(express.static(__dirname + '/../'));
		app.use(express.static(__dirname + '/../externals/'));
	}
});

function myRes(req, res) {
	return {
		render: function(view, data) {
			data = data || {};
			data.lang = req.params.lang || 'en'; // @todo: defaultLanguage
			data.title = data.title || "Home";
			data.footerUrl = req.url;
			data.useMinified = useMinified;

			res.render(view, data);
		}
	}
}

function handleFunc(method, pkg, route) {

	return function(req, res, next) {
		var handler = require("./"+pkg+"/"+route.name+".node");
		if (handler[method]) {
			handler[method](req, myRes(req, res));
		} else {
			next();
		}
	}

}

require("./packages").forEach(function (pkg) {
	require('./util/registrar.node').register(app, pkg, handleFunc);
});

app.listen(1337);