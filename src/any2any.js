if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(["./dec2roman", "./roman2dec"], function(dec2roman, roman2dec){

	function convert(input)
	{
		var num = parseInt(input, 10);
		var converter = isNaN(num) ? roman2dec : dec2roman;
		return converter.convert(input);
	}
	return {convert:convert};

});