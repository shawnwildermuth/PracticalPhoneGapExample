// router.js
(function (router, $) {
  router.app = Sammy("body", function () {

    var that = this;

    // Hack to force Android Browser to not use push state
    var ua = navigator.userAgent;
    var downgradeAndroid = false;
    if (ua.indexOf("Android") >= 0) {
      this.disable_push_state = true;
    };

    var routes = [{
      path: "#/",
      callback: function (i) {
        $(".body").hide(100);
        $("#index-page").show(100);
      }
    },
    {
      path: "#/settings",
      callback: function (i) {
        $(".body").hide(100);
        $("#settings-page").show(100);
      }
    }];

    $.each(routes, function (i, r) {
      that.get(r.path, r.callback);
    });
  });

  router.init = function () {
    router.app.run("#/");
  };

})(window.router = window.router || {}, jQuery);