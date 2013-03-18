// app.js
(function (app, $) {

  // Initialization
  function init() {
    if (window.index) index.init();
    if (window.settings) settings.init();
    if (window.about) about.init();
    if (window.router) router.init();

    $(".back-button").on("click", function (e) {
      window.history.go(-1);
    });
  }

  // Startup 
  $(document).ready(init);

})(window.app = window.app || {}, $);