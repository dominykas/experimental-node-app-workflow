var config = module.exports;

config["Browser tests"] = {
    rootPath: ".",
    environment: "browser",
    sources: [
	    "min/all.js",
    ],
    tests: [
	    "test/*-test.js"
    ],
    libs: [
	    "min/all.js",
	    "test/*-test.js"
    ],
    extensions: [require("buster-amd")]
};
