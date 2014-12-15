(function() {
	"use strict";
	$("html").append("<div id='first'>This is a test</div>");
	var port = chrome.runtime.connect({name:"mycontentscript"});
	port.onMessage.addListener(function(message, sender){
		if(message.greeting === "hello"){
			console.log(message.test);
		}
	});
}());
