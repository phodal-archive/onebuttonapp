define([
    'lib/underscore',
    'app'
], function(_, App) {
    function isChromeExtensions() {
        return typeof module !== "undefined" && module.exports;
    }

    var port = chrome.runtime.connect({name:"mycontentscript"});
    port.onMessage.addListener(function(message,sender){
        if(message.greeting === "hello"){
            alert(message.greeting);
        }
    });

    if(isChromeExtensions()){
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            function(tabs){
                console.log(tabs);
                App.initialize(tabs[0].id);
            }
        );
    } else {
        App.initialize("1");
    }
});