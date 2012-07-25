var config = module.exports;

config["Browser tests"] = {
	rootPath:".",
	environment:"browser",
	sources:[
		"min/all.js"
	],
	tests:[
		"test/**/*.test.js"
	],
	libs:[
	],
	extensions:[require("buster-amd")],
	"buster-amd": {
		preloadTests: true,
		preloadSources: true
	}
};
