/* Global variables */
(function() {
  'use strict';
  angular
    .module('reviewapp')
    .constant('VERSION', "0.0.1-SNAPSHOT") // Typically written out from gulp/grunt comes from some build file that holds the version number that is then passed down the line to end up in the front end.
    // DEBUG_INFO_ENABLED is traditionally driven from the gulp/grunt on the command line where you have 
    // prod arguments that when in prod this value is false so that all debug information is not turned on in production.
    .constant('DEBUG_INFO_ENABLED', true); 
})();
