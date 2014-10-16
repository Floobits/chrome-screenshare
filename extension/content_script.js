/*global chrome*/
"use strict";

function receiveMessage(event) {
  switch (event.data.text) {
    case "flooScreenDoWeHaveAnExtension":
      window.postMessage({name: "flooScreenHasExtension"}, "*");
      break;
    case "flooScreenShare":
      chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
        window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
      });
      break;
  }
}


function main() {
  window.addEventListener("message", receiveMessage, false);
  window.postMessage({name: "flooScreenHasExtension"}, "*");
}

main();
