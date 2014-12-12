require.config({
	baseUrl: "native-src",
	paths: {
		underscore: "lib/underscore",
		URIjs: "lib/URI",
		jquery: "lib/jquery.min",
		backbone: "lib/backbone-min",
		mustache: "lib/mustache",
		text: "lib/text",
	},
	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		}
	}
});

require(["main"], function() {});

