// init.js
(function (index, $) {
 
  if (window.cordova) {
    var url = "http://howtowat.ch/api/1/find/recent";
  } else {
    var url = "http://localhost:8888/recent.js";
  }

  app.vm = {
    items: ko.observableArray([]),
    msg: ko.observable(""),
    getRecent: function () {
      app.vm.msg("Loading");
      app.vm.items.removeAll();
      $.getJSON(url)
      .success(function (data) {
        $.each(data.MediaResults, function (i, item) {
          app.vm.items.push(item)
        });
        app.vm.msg("found: " + app.vm.items().length);
      })
      .fail(function (error) {
        app.vm.msg("failed: " + error);
      });

    }
  };

  index.init = function () {
    ko.applyBindings(app.vm);
    app.vm.getRecent();
  };

})(window.index = window.index || {}, $);