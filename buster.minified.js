var config = module.exports;

config["Browser tests"] = {
	rootPath:".",
	environment:"browser",
	sources:[
		"min/all.js"
	],
	tests:[
		"test/**-common.test.js",
		"test/**-browser.test.js"
	],
	libs:[
	],
	extensions:[require("buster-amd")],
	"buster-amd": {
		preloadTests: true,
		preloadSources: true
	}
};
