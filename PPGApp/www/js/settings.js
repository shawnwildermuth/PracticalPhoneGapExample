// settings.js
(function (settings, $) {
 
  settings.vm = {
    showOnlyMovies: ko.observable(false),
    showLatestOnStartup: ko.observable(true)
  };

  $(document).ready(function () {
    ko.applyBindings(settings.vm);
  });

})(window.settings = window.settings || {}, $);