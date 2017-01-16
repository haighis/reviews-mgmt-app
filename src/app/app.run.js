(function() {
  'use strict';

  angular
    .module('reviewapp')
    .run(runBlock);

	runBlock.$Inject = ['$log'];

  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
