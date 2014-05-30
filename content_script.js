
function receiveMessage(event) {
  console.log("content script got message", event);
  if (event.data.text !== "flooScreenShare") {
    return;
  }
  console.log("getting screen");
  chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
    console.log("posting message", id);
    window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
  });
}

window.addEventListener("message", receiveMessage, false);


function main() {
  console.log("Starting content script.");
}

console.log('wtf content script');
main();
