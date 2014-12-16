(function() {
	"use strict";
	var port = chrome.runtime.connect({name:"lbs"});
	port.onMessage.addListener(function(message, sender){
		if(message.type === "listingsInfo"){
			if($('#lbs_header').length === 0){
				$("html").append("<div id='lbs_header'>" +
				" <div class='header'>We found " + message.totalResultsCount  + " listings in " + message.where + "</div></div>");
			}
		}
	});
}());
