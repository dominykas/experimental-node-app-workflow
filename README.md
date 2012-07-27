An experiment in TDD, nodejs, progressive enhancement, fancy stuff.

Very much a work in progress.

## Set up ##
* ```npm install -g buster```

## Running tests ###
* Start ```buster server```
* Point browsers, which need to run tests, to ```http://localhost:1111```
* ```buster test``` to run tests on raw JS (both, server and client side)
* ```./buld-and-test.sh``` to minify client side JS into ```min/all.js``` and run the same tests against it

## File naming convention ##
The file names in ```test``` folder should map directly to file names in ```src``` folder (the ```*``` part, anyways)

* src/
  * ```*.node.js``` - does not get concantenated into the all.js for browser
  * ```*.js``` - files that may be needed in the browser
* test/
  * ```*.test.node.js``` - only included when ```buster test``` runs for node
  * ```*.test.js``` - runs in both - browser and node
  * To run tests ONLY in the browser, the file should be ```*.test.js``` and also have ```requiresSupportFor: { "DOM": typeof document != "undefined" },``` in the testCase

## Libraries ##
* [buster.js](http://busterjs.org/)
* [requirejs](http://requirejs.org/)
* [amdefine](https://github.com/jrburke/amdefine)
* [almond](https://github.com/jrburke/almond)
* [express](https://github.com/visionmedia/express)
* [handlebars](https://github.com/wycats/handlebars.js)
* [hbs](https://github.com/donpark/hbs)

## Notes to self ##
* Problem: amdefine boilerplate is PITA
* Problem: test boilerplate is PITA - test name for buster; module name for [am]define
* Problem: three copies of handlebars - externals/runtime, externals/hbs, node_modules
* @todo: use runtime version of handlebars