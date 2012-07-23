INCLUDES=`find src | grep "\-\(common\|browser\)\.js$" | sed 's/\.js$//' | paste -sd "," -`
echo $INCLUDES

node node_modules/requirejs/bin/r.js -o \
	baseUrl=. \
	name=lib/almond.js \
	insertRequire=src/app-browser \
	out=min/all.js \
	include=$INCLUDES \
	optimize=none

buster test --config buster.minified.js
