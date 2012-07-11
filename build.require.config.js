({
    baseUrl: "./",
    name: "node_modules/requirejs/require.js", // @todo: replace with almond
    //name: "almond.js",
    //optimize: "none",
    include: [
    	"src/dec2roman",
	    "src/roman2dec",
	    "src/any2any"
    ],
    out: "min/all.js"
})