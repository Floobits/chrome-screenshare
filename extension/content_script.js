
function receiveMessage(event) {
  if (event.data.text !== "flooScreenShare") {
    return;
  }
  chrome.runtime.sendMessage({action: "getScreen"}, function (id) {
    window.postMessage({name: "flooScreenShareResponse", id: id}, "*");
  });
}

window.addEventListener("message", receiveMessage, false);

function main() {
  document.getElementById("fl_webrtc_no_extension").style.display = "none";
  document.getElementById("fl_webrtc_start_screen").style.display = "block";
}

main();
