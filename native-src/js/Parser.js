var factory = function(
	_,
    URI
) {
	var Parser = function () {
		this.initialize.apply(this, arguments);
	};

	_.extend(Parser.prototype, {
		initialize: function() {

		},
		parseWhere: function(url) {
			var uri = URI(url);
			var where = uri.path().split('/');
			return where[1]
		}
	});
	return new Parser();
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = factory(
		require("underscore"),
		require("URIjs/URI")
	);
} else if (typeof define !== "undefined") {
	define([
		"underscore",
		"URIjs/URI"
	], factory);
}
