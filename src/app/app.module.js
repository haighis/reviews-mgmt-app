(function() {
  'use strict';
  // Create reviewsapp angular module 
  angular
    .module('reviewapp', [
    	// Consume Angular Modules
      'ngStorage',
    	'ui.router', 
    	'toastr',   
      'Home.UI',  // Consume/Use Home.UI Angular Module
      'Reviews.UI' // Consume/Use Reviews.UI Angular Module
    	]);
})();

/** 

  This reference application is annotated with Angular Style guide examples in code/comment and link to the content section
  in the Angualar Style Guide written by John Papa.
  https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

**/

