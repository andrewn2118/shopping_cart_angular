angular.module('shoppingCart', ['ngRoute']);

angular.module('shoppingCart')
  .config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '../partials/teas.html'
      })
      .when('/checkout', {
        templateUrl: '../partials/checkout.html',
        controller: 'CheckoutController',
        controllerAs: 'checkout'
      })
      .otherwise({
        templateUrl: '../partials/teas.html'
      });
  });