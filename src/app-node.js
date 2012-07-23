var express = require('express'),
	app = express.createServer();

app.configure(function(){
	app.set("views", __dirname+"/views");
	app.set('view engine', 'hbs');
	require("./util/partials-node").register(__dirname+"/views");

	app.use(express.static(__dirname + '/../'));
//	app.use(express.static(__dirname + '/../min/'));
});

function myRes(req, res) {
	return {
		render: function(view, data) {
			data = data || {};
			data.lang = req.params.lang || 'en'; // @todo: defaultLanguage
			data.title = data.title || "Home";
			data.footerUrl = req.url;

			res.render(view, data);
		}
	}
}

function handleFunc(method, pkg, route) {

	return function(req, res, next) {
		var handler = require("./"+pkg+"/"+route.name+"-node");
		if (handler[method]) {
			handler[method](req, myRes(req, res));
		} else {
			next();
		}
	}

}

require("./packages-common").forEach(function (pkg) {
	require('./util/registrar-node').register(app, pkg, handleFunc);
});

app.listen(1337);