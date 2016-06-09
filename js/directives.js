angular
  .module('shoppingCart')
  .component('scNavBar', {
    bindings: {},
    templateUrl: '../partials/navbar.html',
    controllerAs: 'shop',
    controller: 'ShoppingCartController'
  });