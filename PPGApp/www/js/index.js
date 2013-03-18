// init.js
(function (index, $) {

  var url = "recent.txt";

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
    ko.applyBindings(index.vm, $("#index-page")[0]);
    index.vm.getRecent();
  };

})(window.index = window.index || {}, $);