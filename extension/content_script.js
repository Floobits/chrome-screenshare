/*global chrome*/
"use strict";

function receiveMessage(event) {
  if (event.data.text !== "flooScreenShare") {
    return;
  }
  switch (event.data.text) {
    case: "flooScreenShare":
      chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
        window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
      });
      break;
    case: "flooScreenDoWeHaveAnExtension":
      chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
        window.postMessage({name: "flooScreenHasExtension", id: id}, "*");
      });
      break;
  }
}

window.addEventListener("message", receiveMessage, false);

function main() {
  console.log("Loaded Floobits screen sharing extension.");
}

main();
