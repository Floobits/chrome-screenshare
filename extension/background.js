/*global chrome*/
"use strict";

chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
  if (!msg || msg.action !== "getScreen") {
    return true;
  }
  console.log("chooseDesktopMedia");
  chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], sender.tab, function (id) {
    cb(id);
  });
  return true;
});
