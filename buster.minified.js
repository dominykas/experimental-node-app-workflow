var config = module.exports;

config["Browser tests"] = {
    rootPath: ".",
    environment: "browser",
    sources: [
	    "min/all.js"
    ],
    tests: [
	    "test/*-common.test.js",
	    "test/*-browser.test.js"
    ],
    libs: [
	    "min/all.js",
	    "test/*-common.test.js",
	    "test/*-browser.test.js"
    ],
    extensions: [require("buster-amd")]
};
