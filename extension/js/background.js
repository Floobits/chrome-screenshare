/*global chrome*/

(function () {

  var port,
    manifest = chrome.runtime.getManifest();

  console.log("running bg");

  function postMessage(data) {
    if (!port) {
      console.log("Tried to post without port");
      return;
    }
    port.postMessage(data);
  }

  function getScreen() {
    console.log("Getting screen");
    var portURL = port.sender.url;
      chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], function (id) {
        postMessage({name: "flooScreenShareResponse", id: id});
      });

  }
  function startImport() {
    console.log("startImport!");
    chrome.fileSystem.chooseEntry({
      type: 'openDirectory'
    }, function(dirEntry) {
      console.log("got dirEntry", dirEntry);
    });
  }

  function postVersion () {
    postMessage({name: "flooScreenHasExtension", version: manifest.version});
  }

  chrome.runtime.onConnectExternal.addListener(function(newPort) {
    port = newPort;
    console.log("Got a connection", port);
    port.onMessage.addListener(function(msg) {
      console.log("Got a message", msg);
      switch (msg.action) {
        case "flooScreenDoWeHaveAnExtension":
          postVersion();
          break;
        case "flooScreenShare":
          getScreen();
          break;
        default:
          break;
      }
    });
  });
}());
