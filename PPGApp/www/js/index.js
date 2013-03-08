// init.js
(function (index, $) {

  if (window.cordova) {
    var url = "http://howtowat.ch/api/1/find/recent";
  } else {
    var url = "http://localhost:8888/recent.json";
  }

  index.vm = {
    items: ko.observableArray([]),
    msg: ko.observable(""),
    getRecent: function () {
      index.vm.msg("Loading");
      index.vm.items.removeAll();
      $.ajax({
        url: url,
        dataType: 'json',
        success: function (data) {
          $.each(data.MediaResults, function (i, item) {
            index.vm.items.push(item)
          });
          index.vm.msg("Found " + index.vm.items().length + " Result(s)");
        },
        error: function (xhr, type) {
          index.vm.msg("Failed to load data");
        }
      });

    }
  };

  index.init = function () {
    ko.applyBindings(index.vm);
    var canGetRecent = true;
    if (window.cordova && navigator.connection)
    {
      // Check connection first
      if (navigator.connection.type && navigator.connection.type === Connection.NONE)
      {
        // Cancel get recent and set the text that there isn't a connection
        canGetRecent = false;
        vm.index.msg("No Connection Available");
      }
    }
    if (canGetRecent) index.vm.getRecent();
  };

})(window.index = window.index || {}, $);