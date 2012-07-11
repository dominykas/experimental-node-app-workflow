if (typeof define !== 'function') { var define = require('amdefine')(module); }

// @todo: why can't I just require dec2roman here?
define(["../src/dec2roman", "../src/roman2dec"], function(dec2roman, roman2dec){

	function convert(input)
	{
		var num = parseInt(input, 10);
		var converter = isNaN(num) ? roman2dec : dec2roman;
		return converter.convert(input);
	}
	return {convert:convert};

});