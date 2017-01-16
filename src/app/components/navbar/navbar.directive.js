(function() {
  'use strict';

  angular
    .module('reviewapp')
    .directive('acmeNavbar', acmeNavbar);
  
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function NavbarController() {
      var vm = this;
    }
  }
})();
