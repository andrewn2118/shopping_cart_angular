angular.module('shoppingCart').controller('ShoppingCartController', ShoppingCartController);

  ShoppingCartController.$inject = ['ShoppingCartService'];

  function ShoppingCartController(ShoppingCartService){
    const vm = this;
    vm.cart = ShoppingCartService.getCart();
    vm.inventory = ShoppingCartService.getData();
  }