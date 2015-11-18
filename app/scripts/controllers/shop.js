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
    
    var productsPromise = ProductsService.getAllProducts();
    
    productsPromise.then(function(response){
	    $scope.allProducts = response.data.products;
    });
    
  });
