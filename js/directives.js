angular.module('shoppingCart').component('scNavBar', {
  scope: {},
  templateUrl: '../partials/navbar.html',
  controllerAs: 'shop',
  controller: ShoppingCartController
});

angular.module('shoppingCart').component('scTeasTable', {
  bindings: {

  },
  controllerAs: 'teas',
  controller: 'TeasController'
});