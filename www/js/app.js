/* Shared Use App
 * Maricopa County Department of Public Health
 *
 * Developed by:  Code For Phoenix
 * Email:         codeforphx@gmail.com
 */

var sharedUseApp = {};
sharedUseApp.baseURL = "http://localhost";
sharedUseApp.appVersion = "0.1";

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers/login/loginControllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'homeControllers', 'eventsControllers', 'spacesControllers', 'hostsControllers', 'nearbyControllers', 'activityControllers', 'searchControllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "templates/menu.html"
      })
      // setup an abstract state for the tabs directive
      .state('menu.dashboard', {
        url: '/dashboard',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: "templates/tabs.html"
          }
        }
      })
      .state('menu.dashboard.home', {
        url: '/home',
        views: {
          'dashboard-home': {
            templateUrl: 'templates/dashboard/home.html',
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('menu.dashboard.search', {
        url: '/search',
        views: {
          'dashboard-search': {
            templateUrl: 'templates/dashboard/search.html',
            controller: 'SearchTabCtrl'
          }
        }
      })
      .state('menu.dashboard.activity', {
        url: '/activity',
        views: {
          'dashboard-activity': {
            templateUrl: 'templates/dashboard/activity.html',
            controller: 'ActivityTabCtrl'
          }
        }
      })
      .state('events', {
        url: '/events',

        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'

      })
      .state('spaces', {
        url: '/spaces',
        templateUrl: 'templates/spaces.html',
        controller: 'SpacesCtrl'
      })
      .state('hosts', {
        url: '/hosts',
        templateUrl: 'templates/hosts.html',
        controller: 'HostsCtrl'
      })
      .state('nearby', {
        url: '/nearby',
        templateUrl: 'templates/nearby.html',
        controller: 'NearbyCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
