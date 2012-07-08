({
    baseUrl: "./",
    name: "node_modules/requirejs/require.js", // @todo: replace with almond
    //name: "almond.js",
    //optimize: "none",
    include: [
    	"src/dec2roman"
    ],
    out: "min/all.js"
})