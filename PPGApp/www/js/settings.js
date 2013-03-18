// settings.js
(function (settings, $) {
 
  settings.vm = {
    showOnlyMovies: ko.observable(false),
    showLatestOnStartup: ko.observable(true)
  };

  settings.init = function () {
    ko.applyBindings(settings.vm, $("#settings-page")[0]);
  };

})(window.settings = window.settings || {}, $);