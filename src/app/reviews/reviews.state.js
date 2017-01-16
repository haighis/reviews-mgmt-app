(function() {
  'use strict';

  angular
    .module('Reviews.UI')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('reviews', {
        url: '/reviews',
        templateUrl: 'app/reviews/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      });
  }
})();
