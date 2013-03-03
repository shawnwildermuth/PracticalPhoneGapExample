// app.js
(function (app, $) {
 
  // Shared Functionality
  //var $footer = $("#footer");
  //$(document).on('scroll', function changeFooterPosition() {
  //  $footer.css('top', window.innerHeight + window.scrollY - 40 + "px");
  //});


  // Initialization
  function init() {
    index.init();
    settings.init();
  }

  // Startup (so you can test outside the browser)
  if (window.cordova) {
    document.addEventListener("deviceready", init, false);
  } else {
    $(document).ready(init);
  }

})(window.app = window.app || {}, $);