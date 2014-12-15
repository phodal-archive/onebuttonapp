define([
    'lib/underscore',
    'js/Checker',
    'js/xhr-client',
    'json!/configure.json'
], function(_, Checker, XHRClient, CONFIG) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    chrome.runtime.onConnect.addListener(function(port){
        port.postMessage({greeting:"hello"});
    });

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', CONFIG["base_url"] + CONFIG["query"], false);
            xhr.send();
            var listingNumber = JSON.parse(xhr.responseText).totalResultsCount + '';

            chrome.browserAction.setBadgeText({text: listingNumber , tabId:tab.id});
        } else {
            chrome.browserAction.setBadgeText({text: '', tabId:tab.id});
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});