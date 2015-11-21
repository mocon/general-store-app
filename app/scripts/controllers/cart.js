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
    
		$scope.$watch(function() {
			return CartService.getCartItems();
		}, function(items) {
			$scope.cartItems = items;
		});
		
	  $scope.getCartCount = CartService.getCartCount;
	  
	  $scope.cartSubtotal = CartService.cartSubtotal;
	  
	  $scope.taxAmount = CartService.cartTaxAmount;
	  
	  $scope.grandTotal = CartService.cartGrandTotal;
    
  });
