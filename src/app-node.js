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

function handle(method, module, handlerName) {

	return function(req, res, next) {
		var handler = require("./"+module+"/"+handlerName+"-node");
		if (handler[method]) {
			handler[method](req, myRes(req, res));
		} else {
			next();
		}
	}

}

function register(module) {
	var routes = require("./"+module+"/routes-common.js").node;
	for(var r in routes) {
		app.get(r, handle("GET", module, routes[r]));
		app.post(r, handle("POST", module, routes[r]));
	}
}


app.get('/', function(req, res) {
	myRes(req, res).render("index");
});

register("converter");


app.listen(1337);