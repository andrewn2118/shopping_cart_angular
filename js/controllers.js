angular
  .module('shoppingCart')
  .controller('ShoppingCartController', ShoppingCartController)
  .controller('CheckoutController', CheckoutController);

  ShoppingCartController.$inject = ['ShoppingCartService'];

  function ShoppingCartController(ShoppingCartService){
    const vm = this;
    vm.categories = ['awesome', 'cold', 'dark', 'dry', 'hot', 'lucid', 'spring', 'summer', 'warm', 'winter'];
    vm.cart = ShoppingCartService.getCartQuantity();
    vm.inventory = ShoppingCartService.getData().slice();

    vm.addToCart = function(item){
      vm.cart = ShoppingCartService.addToCart(item);
      vm.cart = ShoppingCartService.getCartQuantity();
      item.addQuantity = '';
    };
  }

  CheckoutController.$inject = ['ShoppingCartService', '$route'];

  function CheckoutController(ShoppingCartService, $route){
    const vm = this;
    vm.cart = ShoppingCartService.getCart();

    vm.subtotal = function(item){
      return (item.price / 100) * item.quantity;
    };

    vm.total = function(){
      return vm.cart.reduce((sum, item) => {
        return sum + vm.subtotal(item);
      }, 0);
    };

    vm.updateCart = function(item){
      vm.cart = ShoppingCartService.updateCart(item);
    };

    vm.deleteFromCart = function(item){
      vm.cart = ShoppingCartService.removeFromCart(item);
      $route.reload();
    };
  }