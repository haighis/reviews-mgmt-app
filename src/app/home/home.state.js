(function() {
  'use strict';

  angular
    .module('Home.UI')
    .config(routerConfig);

  // Dependency Injection  
  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });
  }
})();
