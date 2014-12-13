define([
	'jquery',
	'underscore',
	'backbone',
	"native-src/Views/HomePageView.js"
], function($, _, Backbone, HomePageView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'index': 'homePage',
			'*actions': 'homePage'
		}
	});
	var initialize = function() {
		var app_router = new AppRouter;

		app_router.on('route:homePage', function() {
			var homeView = new HomePageView();
			homeView.render();
		});

		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});