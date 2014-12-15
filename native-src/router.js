define([
	'jquery',
	'underscore',
	'backbone',
	"native-src/Views/HomePageView.js",
	"native-src/Views/ListingResultPageView.js"
], function($, _, Backbone, HomePageView, ListingResultPageView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'index': 'homePage',
			'results': 'results',
			'*actions': 'homePage'
		}
	});
	var initialize = function(id) {
		var app_router = new AppRouter;

		app_router.on('route:homePage', function() {
			var homeView = new HomePageView();
			homeView.render();
		});

		app_router.on('route:results', function() {
			var listingResultPageView = new ListingResultPageView(id);
			listingResultPageView.render();
		});

		if(!Backbone.History.started){
			Backbone.history.start();
		}
	};
	return {
		initialize: initialize
	};
});