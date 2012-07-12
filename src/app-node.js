var app = require('express').createServer();

app.configure(function(){
	app.set("views", __dirname+"/views");
	app.set('view engine', 'hbs');
	require("./util/partials-node").register(__dirname+"/views");
});

function myRes(req, res) {
	return {
		render: function(view, data) {
			data = data || {};
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

function register(pkg) { require('./util/registrar-node').register(app, pkg, handleFunc); }

register("home");
register("converter");

app.listen(1337);