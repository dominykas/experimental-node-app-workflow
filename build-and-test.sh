INCLUDES=`find src -type f \( -iname "*.js" ! -iname "*.node.js" \) | sed 's/\.js$//' | paste -sd "," -`

#node_modules/.bin/handlebars  -r src/views -m src/views/*

node_modules/.bin/r.js -o \
	baseUrl=. \
	name=externals/almond/almond.js \
	insertRequire=src/app \
	out=min/all.js \
	include=$INCLUDES \
	#optimize=none

buster test --config buster.minified.js
