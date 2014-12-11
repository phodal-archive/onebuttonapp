require.config({
	baseUrl: "native-src",
	paths: {
		underscore: "underscore",
		URIjs: "lib/URI"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		md5: {
			exports: "md5"
		}
	}
});

require(["main"], function() {});
