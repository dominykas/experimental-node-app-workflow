INCLUDES=`find src | grep "\-\(common\|browser\)\.js$" | sed 's/\.js$//' | paste -sd "," -`

#node_modules/.bin/handlebars  -r src/views -m src/views/*

node_modules/.bin/r.js -o \
	baseUrl=. \
	name=lib/almond.js \
	insertRequire=src/app-browser \
	out=min/all.js \
	include=$INCLUDES \
	optimize=none

buster test --config buster.minified.js
