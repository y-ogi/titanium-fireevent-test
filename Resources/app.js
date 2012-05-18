// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var WebView = require('ui/WebView').WebView;
var webView = new WebView();

// open tab group
//tabGroup.open();
win.add(webView);
win.open();

webView.openUrl("http://dl.dropbox.com/u/1932006/titest.html")
