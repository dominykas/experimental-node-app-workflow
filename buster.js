var config = module.exports;

config["Node tests"] = {
	rootPath:".",
	environment:"node",
	tests:[
		"test/*-common.test.js",
		"test/*-node.test.js"
	]
};

config["Browser tests"] = {
	rootPath:".",
	environment:"browser",
	sources:[
		"src/*-common.js",
		"src/*-browser.js"
	],
	tests:[
		"test/*-common.test.js",
		"test/*-browser.test.js"
	],
	libs:[
		"node_modules/requirejs/require.js"
	],
	extensions:[require("buster-amd")]
};
