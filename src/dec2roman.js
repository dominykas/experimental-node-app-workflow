if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {

	var dec2roman = function(digit) {

		var result = '';

		[
			[1000, 'm'],
			[900, 'cm'],
			[500, 'd'],
			[400, 'cd'],
			[100, 'c'],
			[90, 'xc'],
			[50, 'l'],
			[40, 'xl'],
			[10, 'x'],
			[9, 'ix'],
			[5, 'v'],
			[4, 'iv'],
			[1, 'i']
		].forEach(function(x) {
			while (digit >= x[0]) {
				result += x[1];
				digit -= x[0];
			};
		});

		return result;
	};

	return dec2roman;
});