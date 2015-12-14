angular.module('powerapp.controllers', [])

.controller('TwitterCtrl', function($scope, $cordovaInAppBrowser, $cordovaAppAvailability, $cordovaDevice) {
  
  
    
    $scope.openTwitter = function() {
      
        var scheme;
        var platform;
      
        platform = $cordovaDevice.getPlatform;
      
        // Don't forget to add the org.apache.cordova.device plugin!
        if(platform == 'iOS') {
            console.log('iOS platform');
            scheme = 'twitter://';
        }
        else if(platform == 'Android') {
            console.log('Android platform');
            scheme = 'com.twitter.android';
        }
        
        window.open('twitter://user?screen_name=playitloud883', '_system', 'location=no');
        
        //$cordovaAppAvailability.check(
        //  scheme,
        //  function() { // is available
        //      window.open('twitter://user?screen_name=playitloud883', '_system', 'location=no');
        //      console.log('Twitter is available');
        //  },
        //  function () { // not available
        //      window.open('https://twitter.com/playitloud883', '_system', 'location=no');
        //      console.log('Twitter is not available');
        //  }
        //);
    }  
    
});