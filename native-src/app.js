define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router){

	var initialize = function(id){
		Router.initialize(id);
	};

	return {
		initialize: initialize
	};
});
