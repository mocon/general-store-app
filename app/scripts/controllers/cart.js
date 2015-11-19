'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the generalStoreApp
 */
angular.module('generalStoreApp')
  .controller('CartCtrl', function (CartService) {
    
    CartService.cartSubtotal();
    
  });
