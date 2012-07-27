if (typeof define !== 'function') { var define = require('amdefine')(module); }

// note: experiment - TDD?
// loosely based on https://github.com/donpark/hbs/pull/11
define(["fs", "path", "hbs", "glob"], function(fs, path, hbs, glob){

	function partials(directory, globString, cb) {
		// loads partials from a directory
		cb = cb || throwErrors;

		glob(globString, {cwd: directory}, function(err, matches){

			var remaining = matches.length;
			matches.forEach(function(file) {
				partial(file, directory, function(err) {
					if (err) return cb(err);
					if (--remaining === 0) cb();
				});
			});

		});
	}

	function formatPartialName(file)
	{
		return file.replace(/\.\w+$/, "").replace(/\//g, "_");
	}

	function partial(file, directory, cb) {

		cb = cb || throwErrors;

		var name = formatPartialName(file);

		fs.readFile(path.join(directory, file), function(err, data) {
			if (err) return cb(err);
			hbs.registerPartial(name, data.toString());
			cb();
		})

	}

	function throwErrors(err) {
		if (err) throw err
	}

	return {register: partials};

});