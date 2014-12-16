(function() {
	"use strict";
	var port = chrome.runtime.connect({name:"mycontentscript"});
	port.onMessage.addListener(function(message, sender){
		if(message.type === "listingInfo"){
			$("html").append("<div id='first'>We found those listing in Casa.it: " + message.listingNumber + "</div>");
		}
	});
}());
