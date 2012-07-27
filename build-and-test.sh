INCLUDES=`find src -type f \( -iname "*.js" ! -iname "*.node.js" \) | sed 's/\.js$//' | paste -sd "," -`
HBS=`find src -type f \( -iname "*.hbs" \) | sed 's/^\(.*\)\.hbs$/hbs\!\1/' | paste -sd "," -`

node_modules/.bin/r.js -o require.build.js include=$INCLUDES,$HBS

buster test --config buster.minified.js
