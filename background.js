

chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
  if (!msg || msg.action !== "getScreen") {
    console.log("msg is", msg);
    return true;
  }
  console.log("chooseDesktopMedia");
  chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], function (id) {
    console.log("chose", id);
    cb(id);
  });
  return true;
});
