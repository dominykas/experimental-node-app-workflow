var config = module.exports;

config["Browser tests"] = {
    rootPath: ".",
    environment: "browser",
    sources: [
    ],
    tests: [
        "test/*-test.js"
    ],
    libs: [
        "min/all.js",
    ],
    extensions: [require("buster-amd")]
};
