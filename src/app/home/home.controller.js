(function() {
  'use strict';
  angular
    .module('Home.UI')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
  
  function HomeController($log) {
    var vm = this;
    vm.testModel = "test";
    activate();

    function activate() {         
      $log.log('I am in the home controller in activate');
    }    
  }
})();
