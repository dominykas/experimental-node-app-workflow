if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {

	function convert(digit) {

		var romans = {
			'm': [1000],
			'd': [500],
			'c': [100, 'd', 'm'],
			'l': [50],
			'x': [10, 'l', 'c'],
			'v': [5],
			'i': [1, 'v', 'x']
		};

		var sum = 0, i = 0;
		do {
			var current = digit[i];
			var next = digit.length > i+1 ? digit[i+1] : false;
			var currentVal = romans[current];
			if (currentVal.length > 0 && (next == currentVal[1] || next == currentVal[2])) {
				sum+=(romans[next][0]-currentVal[0]);
				i++;
			} else {
				sum+=currentVal[0];
			}
			i++;
		} while (i < digit.length);

		return sum;
	}

	return {convert:convert};
});