'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the generalStoreApp
 */
angular.module('generalStoreApp')
  .controller('CartCtrl', function ($scope, CartService) {
    
    // vm = viewmodel
    var vm = this;
    
		$scope.$watch(function() {
			return CartService.getCartItems();
		}, function(items) {
			vm.cartItems = items;
		});
		
	  vm.getCartCount = CartService.getCartCount;
	  
	  vm.cartSubtotal = CartService.cartSubtotal;
	  
	  vm.taxAmount = CartService.cartTaxAmount;
	  
	  vm.grandTotal = CartService.cartGrandTotal;
    
  });
