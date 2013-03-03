// about.js
(function (about, $) {
 

  about.vm = {
    geoInfo: ko.observable(""),
    getGeoInfo: function () {
      about.vm.geoInfo("Getting Geolocation Info");
      navigator.geolocation.getCurrentPosition(
        // Success
        function (data) {
          var loc = data.coords;
          about.vm.geoInfo(loc.latitude + " x " + loc.longitude + " (Alt: " + loc.altitude + ")");
        },
        // Error
        function (err) {
          about.vm.geoInfo("Failed to get position");
        },
        // Options
        { enableHighAccuracy: true });
    }
  };

  about.init = function () {
    ko.applyBindings(about.vm);
    about.vm.getGeoInfo();
  };

})(window.about = window.about || {}, $);