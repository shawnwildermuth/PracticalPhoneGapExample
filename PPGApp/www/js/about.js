// about.js
(function (about, $) {
 
  about.vm = {
    about: ko.observable(""),
    getGeoInfo: function () {
      navigator.geolocation.getCurrentPosition(
        // Success
        function (loc) {
          about.vm.about(loc.latitude + "x" + loc.longitude + " (Alt: " + loc.altitude + ")");
        },
        // Error
        function (err) {
          about.vm.about("Failed to get position");
        },
        // Options
        { enableHighAccuracy: true });
    }
  };

  about.index = function () {
    ko.applyBindings(about.vm);
    about.vm.getGeoInfo();
  };

})(window.about = window.about || {}, $);