'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.directive:addRemove
 * @description
 * # addRemove
 * Directive of the generalStoreApp
 */
angular.module('generalStoreApp')
  .directive('addRemove', function (CartService) {
    return {
	    restrict: 'E',
	    scope: {
		    product: '='
	    },
	    replace: true,
	    templateUrl: 'views/add-remove.html',
	    link: function(scope){
		  
		    scope.addToCart = function(){
					CartService.addProductToCart(scope.product);
		    };
		    
		    scope.removeFromCart = function(){
					CartService.removeProductFromCart(scope.product);
		    };
		    
		    	scope.isInCart = CartService.isInCart;
		    
	    }
    };
    
  });
