if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	return {
		"node" : {
			"/d2r" : "d2r",
			"/r2d" : "r2d",
			"/a2a" : "a2a"
		},
		"browser" : {
			"/d2r" : "d2r",
			"/r2d" : "r2d"
		}
	};

});