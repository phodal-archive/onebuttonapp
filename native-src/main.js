define([
    'lib/underscore',
    'app'
], function(_, App) {
    function isChromeExtensions() {
        return typeof module !== "undefined" && module.exports;
    }

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