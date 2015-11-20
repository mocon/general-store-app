'use strict';

/**
 * @ngdoc overview
 * @name generalStoreApp
 * @description
 * # generalStoreApp
 *
 * Main module of the application.
 */
angular
  .module('generalStoreApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'viewhead'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
