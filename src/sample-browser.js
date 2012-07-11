if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function(){
	return {
		hasWindow: typeof(window) !== 'undefined',
		hasModule: typeof(module) !== 'undefined'
	}
});