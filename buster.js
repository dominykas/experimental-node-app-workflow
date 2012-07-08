var config = module.exports;

config["Node tests"] = {
    rootPath: ".",
    environment: "node",
    tests: [
        "test/*-test.js"
    ],
};

config["Browser tests"] = {
    rootPath: ".",
    environment: "browser",
    sources: [
        "src/*.js",
    ],
    tests: [
        "test/*-test.js"
    ],
    libs: [
    	"node_modules/requirejs/require.js"
    ],
    extensions: [require("buster-amd")]
};
