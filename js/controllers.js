angular
  .module('shoppingCart')
  .controller('ShoppingCartController', ShoppingCartController)
  .controller('CheckoutController', CheckoutController);

  ShoppingCartController.$inject = ['ShoppingCartService'];

  function ShoppingCartController(ShoppingCartService){
    const vm = this;
    vm.cart = ShoppingCartService.getCartQuantity();
    vm.inventory = ShoppingCartService.getData().slice();

    vm.addToCart = function(item){
      vm.cart = ShoppingCartService.addToCart(item);
      vm.cart = ShoppingCartService.getCartQuantity();
    };
  }

  CheckoutController.$inject = ['ShoppingCartService'];

  function CheckoutController(ShoppingCartService){
    const vm = this;
    vm.cart = ShoppingCartService.getCart();

    vm.subtotal = function(price, amt){
      return (price / 100) * amt;
    }

    vm.updateCart = function(item){
      vm.cart = ShoppingCartService.updateCart(item);
    }

    vm.deleteFromCart = function(item){
      vm.cart = ShoppingCartService.removeFromCart(item);
    }
  }