'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.service:CartService
 * @description
 * # CartService
 * Service of the generalStoreApp
 */
angular.module('generalStoreApp')
  .service('CartService', function ($rootScope) {
    $rootScope.numberOfItemsInCart = 0;
    
	  this.cartItems = [];
	  
	  this.incrementCartCounter = function(){
		  $rootScope.numberOfItemsInCart ++;
	  };
    
  });
