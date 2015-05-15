/*global chrome*/

(function () {
  console.log("running bg");
  var actions = {
    getScreen: function getScreen(msg, sender, cb) {
      console.log("chooseDesktopMedia");
      chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], sender.tab, function (id) {
        cb(id);
      });
    },
    startImport: function startImport(msg, sender, cb) {
      console.log("startImport!");
    }
  };

  chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
    console.log("got message");
    console.log("msg data", msg, cb, arguments, actions, _.isFunction(actions[msg.action]));
    if (msg && _.isFunction(actions[msg.action])) {
      actions[msg.action].apply(actions, arguments);
    }
    return true;
  });
}());
