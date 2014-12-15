define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html'
],function($, Backbone, _, Mustache, indexTemplate){

	function isChromeExtensions() {
		return typeof module !== "undefined" && module.exports;
	}

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function(id) {
			this.tabID = id;
		},

		render:function() {
			var rendered = Mustache.to_html(indexTemplate, {welcome: "Hello, this is LBS Helper"});
			this.$el.html(rendered);
		}
	});

	return HomePageView;
});
