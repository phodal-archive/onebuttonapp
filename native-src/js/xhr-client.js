var factory = function(
	_
) {

	"use strict";

	var XHRClient = function() {
		this.initialize.apply(this, arguments);
	};

	var HTTP_METHOD = {
		GET: "GET",
		POST: "POST",
		PUT: "PUT",
		HEAD: "HEAD"
	};

	var STATE = {
		UNSENT: 0,
		OPENED: 1,
		HEADERS_RECEIVED: 2,
		LOADING: 3,
		DONE: 4
	};

	var STATUS = {
		OK: 200
	};

	XHRClient.prototype.initialize = function() {
	};

	function is_url(url, config) {
		if (!url || typeof url !== "string") {
			config['error'](new Error("URL is an invalid type"));
		}
	}

	XHRClient.prototype.request = function(url, config) {
		var request = new XMLHttpRequest();

		config = config || {};
		_.defaults(config, {
			http_method: "GET",
			responseType: "json",
			headers: {},
			success: {},
			error: {},
			data: {},
			timeout: 0,
			cacheDateHeader: false
		});

		if (!url || typeof url !== "string") {
			config['error'](new Error("URL is an invalid type"));
		}
		if (config['http_method'] === HTTP_METHOD['GET']) {
			url += hasParams(url) ? "&" : "?";
			url += serialize(config['data']);
		}

		request.open(config['http_method'], url, true);
		_.each(_.keys(config['headers']), function(key) {
			request.setRequestHeader(key, config['headers'][key]);
		});

		request.responseType = config['responseType'];

		request.timeout = config['timeout'];
		request.ontimeout = function() {
			config['error'](new Error("The request timed out"));
		};

		request.onreadystatechange = _.bind(function() {
			if (request.readyState === STATE.DONE) {
				if (request.status === STATUS.OK) {
					var response, error = new Error("Unable to parse the response");
					try {
						response = parseResponse(request);
					}
					catch(e) {
						response = null;
					}

					if( response ) {
						config['success'] = response;
					} else {
						config['error'] = error;
					}
				} else {
					var error = new Error("Request completed with a non-200 status code");
					error.status = request.status;
					error.statusText = request.statusText;

					config['error'](error);
				}
			} else if (request.readyState === STATE.HEADERS_RECEIVED) {
				var httpResponseHeaderDate = request.getResponseHeader("Date");

				if (httpResponseHeaderDate && config.cacheDateHeader) {
					try {
						var serverClientTimePairObject = {
							"serverTime" : Date.parse(httpResponseHeaderDate),
							"clientTime" : Date.now()
						};
					} catch (error) {}
				}
			}
		},this);

		try {
			if (config['http_method'] === HTTP_METHOD['GET'] || _.isEmpty(config['data'])) {
				request.send();
			}
			else if (config['http_method'] !== HTTP_METHOD['GET'] && config['headers']['Content-Type'] === 'application/x-www-form-urlencoded') {
				request.send(serialize(config['data']));
			}
			else {
				request.send(JSON.stringify(config['data']));
			}
		} catch (e) {
			config['error'](e);
		}
	};

	var parseResponse = function(request) {
		var response;
		if (request.responseType === "json") {
			response = request.response || JSON.parse(request.responseText);
		} else if (request.responseType === "arraybuffer") {
			response = request.response || request.responseText;
		} else if (request.responseType === "text") {
			response = request.response || request.responseText;
		} else {
			response = JSON.parse(request.response || request.responseText);
		}
		return response;
	};

	var hasParams = function(url) {
		return (url.indexOf("?") >= 0);
	};

	var serialize = function(obj, prefix) {
		var params = [];

		for (var objKey in obj) {
			var paramKey = objKey;

			if (prefix) {
				paramKey = "[" + paramKey + "]";
			}

			var paramValue = obj[paramKey];
			if (typeof paramValue === "object") {
				paramValue = serialize(paramValue, paramKey);
			}

			var param = encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramValue);
			params.push(param);
		}
		return params.join("&");
	};

	return XHRClient;
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