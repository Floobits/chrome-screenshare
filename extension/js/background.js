/*global chrome*/

(function () {
  console.log("running bg");
  //var actions = {
  //  getScreen: function getScreen(msg, sender, cb) {
  //    console.log("chooseDesktopMedia");
  //    chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], sender.tab, function (id) {
  //      cb(id);
  //    });
  //  },
  //  startImport: function startImport(msg, sender, cb) {
  //    console.log("startImport!");
  //    chrome.fileSystem.chooseEntry({
  //      type: 'openDirectory'
  //    }, function(dirEntry) {
  //      console.log("got dirEntry", dirEntry);
  //    });
  //  }
  //};
  //
  //chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
  //  console.log("got message");
  //  console.log("msg data", msg, cb, arguments, actions, _.isFunction(actions[msg.action]));
  //  if (msg && _.isFunction(actions[msg.action])) {
  //    actions[msg.action].apply(actions, arguments);
  //  }
  //  return true;

  //});
  //From content_script:
  /*global chrome*/
  //"use strict";
  //var manifest = chrome.runtime.getManifest();
  //
  //function receiveMessage(event) {
  //  switch (event.data.text) {
  //    case "flooScreenDoWeHaveAnExtension":
  //      postVersion();
  //      break;
  //    case "flooScreenShare":
  //      chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
  //        window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
  //      });
  //      break;
  //    default:
  //      console.log("starting import from chrome ext");
  //      chrome.runtime.sendMessage({action: event.data.text});
  //      break;
  //  }
  //}
  //
  //function postVersion () {
  //  window.postMessage({name: "flooScreenHasExtension", version: manifest.version}, "*");
  //}
  //
  //function main() {
  //  window.addEventListener("message", receiveMessage, false);
  //  postVersion();
  //}
  //
  //main();


  chrome.runtime.onConnectExternal.addListener(function(port) {
    console.log("Got a connection", port);
    port.onMessage.addListener(function(msg) {
      console.log("Got a message", msg);
    });
  });
}());
