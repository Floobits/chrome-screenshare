
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
  $("#fl_webrtc_no_extension").hide();
  $("#fl_webrtc_start_screen").show();
}

main();
