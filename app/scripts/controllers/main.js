'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generalStoreApp
 */
angular.module('generalStoreApp')
  .controller('MainCtrl', function ($scope, ProductsService) {
    
    var productsPromise = ProductsService.getAllProducts();
    
    productsPromise.then(function(response){
	    $scope.allProducts = response.data.products;
    });
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
