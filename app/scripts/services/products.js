'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.service:ProductsService
 * @description
 * # ProductsService
 * Service of the generalStoreApp
 */
angular.module('generalStoreApp')
  .service('ProductsService', function ($http) {
	  
	  var _products = [];
	  
		var scope = {};
		
		scope.getProducts = function() {
			return _products;
		};
		
		scope.getAllProducts = function() {
			$http({
				method: 'GET',
				url: 'https://boiling-oasis-4008.herokuapp.com/products'
			}).then(function successCallback(response) {
				_products = response.data.products;
			}, function errorCallback(response) {
				console.log('Error code %s while retrieving products.', response.status);
			});
		};
	  
	  scope.qtyAvailable = function(product){
		  return product.qtyAvailable;
	  };
	  
	  scope.incrementProduct = function(product){
		  product.qtyAvailable ++;
	  };
	  
	  scope.decrementProduct = function(product){
		  if (product.qtyAvailable > 0) {
			  product.qtyAvailable --;
		  }
	  };
	  
	  return scope;
    
  });
