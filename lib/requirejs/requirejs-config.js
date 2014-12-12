require.config({
	baseUrl: "native-src",
	paths: {
		underscore: "underscore",
		URIjs: "lib/URI",
		zepto: 'lib/zepto.min'
	},
	shim: {
		zepto: {
			exports: '$'
		},
		underscore: {
			exports: "_"
		}
	}
});

require(["main"], function() {});
