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
	  
	  this.getCartItems = function(){
		  return this.cartItems;
	  };
	  
	  this.incrementCartCounter = function(){
		  $rootScope.numberOfItemsInCart ++;
	  };
	  
	  this.decrementCartCounter = function(){
		  $rootScope.numberOfItemsInCart --;
	  };
	  
	  this.cartSubtotal = function(){
	    var itemsInCart = $rootScope.allProducts,	    
	    		i,
	    		runningTotal = 0;
	    		
	    for (i in itemsInCart){
		    if (itemsInCart[i].hasOwnProperty('qtyInCart')) {
			    runningTotal += itemsInCart[i].qtyInCart * itemsInCart[i].price;
		    }
	    }
	    $rootScope.subtotal = runningTotal;
	    $rootScope.tax = $rootScope.subtotal * 0.095;
	    $rootScope.total = $rootScope.subtotal + $rootScope.tax;
    };
    
  });
