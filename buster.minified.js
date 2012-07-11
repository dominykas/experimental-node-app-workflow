var config = module.exports;

config["Browser tests"] = {
	rootPath:".",
	environment:"browser",
	sources:[
		// note: buster-amd ignores the below line and expects RequireJS to pre-load things
		"min/all.js"
	],
	tests:[
		// note: buster-amd only uses the module names and expects RequireJS to pre-load things
		"test/*-common.test.js",
		"test/*-browser.test.js"
	],
	libs:[
		// note: must have this pre-loaded because almond.js does not include a script loader
		"min/all.js",
		"test/*-common.test.js",
		"test/*-browser.test.js"
	],
	extensions:[require("buster-amd")]
};
