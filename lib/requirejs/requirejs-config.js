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
		},
		md5: {
			exports: "md5"
		}
	}
});

require(["main"], function() {});
