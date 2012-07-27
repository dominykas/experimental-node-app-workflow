require.config({
	hbs : {
		templateExtension : 'hbs',
		disableI18n : true
	},
	baseUrl: '/'
});
define(["src/packages"], function(packages){

	console.log(packages);

	requirejs(['hbs!src/converter/form'], function(formTpl) {
		console.log(formTpl({input:3,result:'iii'}));
		console.log(formTpl({input:6}));
	});

});