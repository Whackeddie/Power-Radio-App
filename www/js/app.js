angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('powerapp', [
  'ionic',
  'ngCordova',
  'powerapp.directives',
  'powerapp.views',
  'powerapp.controllers',
  'underscore'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/side-menu.html"
  })

  .state('app.view1', {
    url: "/view1",
    views: {
      'menuContent': {
        templateUrl: "views/view-1.html"
      }
    }
  })

  .state('app.view2', {
    url: "/view2",
    views: {
      'menuContent': {
        templateUrl: "views/view-2.html"
      }
    }
  })

  .state('app.view3', {
    url: "/view3",
    views: {
      'menuContent': {
        templateUrl: "views/view-3.html"
      }
    }
  })

  .state('app.view4', {
    url: "/view4",
    views: {
      'menuContent': {
        templateUrl: "views/view-4.html"
      }
    }
  })

  .state('app.view5', {
    url: "/view5",
    views: {
      'menuContent': {
        templateUrl: "views/view-5.html"
      }
    }
  })

  .state('app.view6', {
    url: "/view6",
    views: {
      'menuContent': {
        templateUrl: "views/view-6.html"
      }
    }
  })

  .state('app.view7', {
    url: "/view7",
    views: {
      'menuContent': {
        templateUrl: "views/view-7.html"
      }
    }
  })

  .state('app.view8', {
    url: "/view8",
    views: {
      'menuContent': {
        templateUrl: "views/view-8.html"
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/view1');
})

;
