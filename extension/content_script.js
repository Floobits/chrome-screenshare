/*global chrome*/
"use strict";
var manifest = chrome.runtime.getManifest();

function receiveMessage(event) {
  switch (event.data.text) {
  case "flooScreenDoWeHaveAnExtension":
    postVersion();
    break;
  case "flooScreenShare":
    chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
      window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
    });
    break;
  case "startImport":
    console.log("starting import from chrome ext");
    break;
  }
}

function postVersion () {
  window.postMessage({name: "flooScreenHasExtension", version: manifest.version}, "*");
}

function main() {
  window.addEventListener("message", receiveMessage, false);
  postVersion();
}

main();
