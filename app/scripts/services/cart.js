'use strict';

/**
 * @ngdoc function
 * @name generalStoreApp.service:CartService
 * @description
 * # CartService
 * Service of the generalStoreApp
 */
angular.module('generalStoreApp')
  .service('CartService', function () {
    var scope = {};
    
    // Array of arrays
    var _cartItems = [];
	  
	  scope.getCartItems = function(){
		  return _cartItems;
	  };
	  
	  scope.addProductToCart = function(product) {
			var productAdded = false;
			
			_cartItems = _cartItems.map(function(subItems) {				
				// If one of this product is already in cart, push subsequent matching ones to sub-array
				if (subItems[0].name === product.name) {
					productAdded = true;
					subItems.push(product);
					return subItems;
				}
				return subItems;
			});
			
			// Otherwise, push this product to the top level array
			if (!productAdded) {
				_cartItems.push([product]);
			}
	  };
	  
	  scope.removeProductFromCart = function(product) {		  
		  for (var i in _cartItems) { 
			  var identicalProducts = _cartItems[i];
			  if (identicalProducts[0].name === product.name){
				  identicalProducts.splice(0,1); 
					if (identicalProducts.length === 0) {
						_cartItems.splice(i, 1);
					}
				  return;
			  }
		  }
	  };
	  
	  scope.getCartCount = function() {
		  return _cartItems.reduce(function(prev, products) {
			  return prev + products.length;
		  }, 0);
	  };
	  
	  scope.isInCart = function(product) {
		  return _cartItems.filter(function(products) {
				return (products[0].name === product.name);
		  }).length;
	  };
	  
	  scope.cartSubtotal = function(){
	    return _cartItems.reduce(function(prev, products) {
			  return prev + (products.length * products[0].price);
		  }, 0);
    };
    
    scope.cartTaxAmount = function(){
	    var subtotalAmount = scope.cartSubtotal(),
	    			taxRate = 0.095;
	    
	    return subtotalAmount * taxRate;
    };
    
    scope.cartGrandTotal = function(){
	    var subtotalAmount = scope.cartSubtotal(),
	    			taxAmount = scope.cartTaxAmount();
	    			
	    	return subtotalAmount + taxAmount;
    };
    
    return scope;
    
  });
