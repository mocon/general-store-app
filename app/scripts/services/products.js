'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.service:ProductsService
 * @description
 * # ProductsService
 * Service of the generalStoreApp
 */
angular.module('generalStoreApp')
  .service('ProductsService', function ($http, $q) {
    
	  this.getAllProducts = function(){
			var deferred = $q.defer();
			
			$http({
				method: 'GET',
				url: 'https://boiling-oasis-4008.herokuapp.com/products'
			}).then(function successCallback(response) {
				console.log('Products retrieved successfully.');
				deferred.resolve(response);
			}, function errorCallback(response) {
				console.log('Error code %s while retrieving products.', response.status);
				deferred.reject(response);
			});
			
			return deferred.promise;
	  };
    
  });
