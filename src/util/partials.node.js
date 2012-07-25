if (typeof define !== 'function') { var define = require('amdefine')(module); }

// note: experiment - TDD?
// loosely based on https://github.com/donpark/hbs/pull/11
define(["fs", "path", "hbs"], function(fs, path, hbs){

	function partials(directory, cb) {
		// loads partials from a directory
		cb = cb || throwErrors

		fs.readdir(directory, function(err, files) {
			if (err) return cb(err)
			var remaining = files.length
			files.forEach(function(file) {
				if (file.substring(0, 1) === '_') {
					partial(path.join(directory, file), function(err) {
						if (err) return cb(err)
						if (--remaining === 0) cb()
					})
				}
			})
		})
	}

	function partial(file, cb) {
		cb = cb || throwErrors
		var name = path.basename(file).replace(/\.\w+$/, "")
		fs.readFile(file, function(err, data) {
			if (err) return cb(err)
			hbs.registerPartial(name, data.toString())
			cb()
		})
	}

	function throwErrors(err) {
		if (err) throw err
	}

	return {register: partials};

});