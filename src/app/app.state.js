(function() {
  'use strict';

  angular
    .module('reviewapp')
    .config(routerConfig);

  routerConfig.$Inject = ['$stateProvider','$urlRouterProvider'];
  
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
