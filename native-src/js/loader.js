(function() {
	"use strict";
	var port = chrome.runtime.connect({name:"mycontentscript"});
	port.onMessage.addListener(function(message, sender){
		if(message.type === "listingsInfo"){
			if($('#first').length === 0){
				$("html").append("<div id='lbs_header'> <div class='header'>We found those listing in Casa.it: " + message.totalResultsCount + "</div></div>");
			}
		}
	});
}());
