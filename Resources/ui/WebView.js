exports.WebView = function() {
    var self = Ti.UI.createWebView({
        width: '100%',
        height: '100%',
    });

    // open url
    self.openUrl = function(url) {
        // remove event 
        Ti.App.removeEventListener('onWebView', onWebViewListener);
        // load HTML
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            var html = this.responseText;
            self.html = html;
        };
        xhr.open("GET", url);
        xhr.send();
    };

    var onWebViewListener = function(e) {
        alert(e.message + ' message from Ti');
    };

    self.addEventListener('load', function(e) {
        Ti.App.addEventListener('onWebView', onWebViewListener);
    });

    return self;
};
