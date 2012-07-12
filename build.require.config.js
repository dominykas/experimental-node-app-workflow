({
	baseUrl: "./",
	name: "almond.js",
	//optimize: "none",
	include: [
		"src/dec2roman-common",
		"src/roman2dec-common",
		"src/any2any-common",
		"src/sample-browser",
		"src/converter/routes-common",
		"src/home/routes-common",
		"src/packages-common",
		"src/app-browser"
	],
	insertRequire: ["src/app-browser"],
	out: "min/all.js"
})