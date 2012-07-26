require.config({
	hbs : {
		templateExtension : 'hbs',
		disableI18n : true
	}
});
define(["./packages"], function(packages){

	console.log(packages);

	requirejs(['hbs!converter/form'], function(formTpl) {
		console.log(formTpl({input:3,result:'iii'}));
		console.log(formTpl({input:6}));
	});

});