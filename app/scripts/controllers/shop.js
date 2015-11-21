'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the generalStoreApp
 */
angular.module('generalStoreApp')
  .controller('ShopCtrl', function ($scope, ProductsService) {
    
    $scope.$watch(function() {
			return ProductsService.getProducts();
		}, function(products) {
			$scope.allProducts = products;
		});
		ProductsService.getAllProducts();
    
  });
