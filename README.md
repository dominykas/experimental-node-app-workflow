An experiment in TDD, nodejs, progressive enhancement, fancy stuff.

Very much a work in progress.

## Set up ##
* ```npm install -g buster```

## Running tests ###
* Start ```buster server```
* Point browsers, which need to run tests, to ```http://localhost:1111```
* ```buster test``` to run tests on raw JS (both, server and client side)
* ```./buld-and-test.sh``` to minify client side JS into ```min/all.js``` and run the same tests against it

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
* Problem: test boilerplate is PITA - test name for buster; module name for define
* Is there a better file naming scheme than -common/-browser/-node?
