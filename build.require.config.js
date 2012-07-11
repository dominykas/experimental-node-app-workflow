({
	baseUrl: "./",
	name: "almond.js",
	optimize: "none",
	include: [
		"src/dec2roman-common",
		"src/roman2dec-common",
		"src/any2any-common",
		"src/sample-browser",
		"src/sample-node"
	],
	out: "min/all.js"
})