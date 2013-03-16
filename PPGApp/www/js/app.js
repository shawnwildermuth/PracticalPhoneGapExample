// app.js
(function (app, $) {
 
  // Initialization
  function init() {
    if (window.index) index.init();
    if (window.settings) settings.init();
    if (window.about) about.init();

    $(".back-button").on("click", function (e) {
      window.history.go(-1);
    });
  }

  // Startup (so you can test outside the browser)
  if (window.cordova) {
    document.addEventListener("deviceready", init, false);
  } else {
    $(document).ready(init);
  }

})(window.app = window.app || {}, $);