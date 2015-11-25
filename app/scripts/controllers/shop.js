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
    
    // vm = viewmodel
    var vm = this;
    
    $scope.$watch(function() {
			return ProductsService.getProducts();
		}, function(products) {
			vm.allProducts = products;
		});
		
		ProductsService.getAllProducts();
    
  });
