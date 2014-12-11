var factory = function(
	_
) {
	var Checker = function () {
		this.initialize.apply(this, arguments);
	};

	_.extend(Checker.prototype, {
		initialize: function() {
		},

		checkForValidUrl: function(url, CONFIG) {
			var match = url.match(new RegExp(CONFIG['url_pattern']));
			if(typeof match != "undefined" && null != match) {
				return true;
			} else {
				return false;
			}
		}
	});
	return new Checker();
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = factory(
		require("underscore")
	);
} else if (typeof define !== "undefined") {
	define([
		"underscore"
	], factory);
}
