// settings.js
(function (settings, $) {
 
  settings.vm = {
    showOnlyMovies: ko.observable(false),
    showLatestOnStartup: ko.observable(true)
  };

  settings.index = function () {
    ko.applyBindings(settings.vm);
  };

})(window.settings = window.settings || {}, $);