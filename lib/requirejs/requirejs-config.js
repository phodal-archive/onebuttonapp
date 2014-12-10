require.config({
	baseUrl: "native-src",
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
