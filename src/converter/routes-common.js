if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){

	return [
		{
			route: "/d2r",
			name: "d2r",
			browser: true
		},
		{
			route: "/r2d",
			name: "r2d",
			browser: true
		},
		{
			route: "/a2a",
			name: "a2a"
		}
	];

});