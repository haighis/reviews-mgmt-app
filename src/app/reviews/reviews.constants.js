/*
  Module specific Constants help to prevent magic values found in angular views, controllers, services, etc. 
  Applications will always end up with a string value at some point so having them in one file makes
  it easy for the developer to know that they can change the constant in this one file rather than
  combing through any number of views, controllers, services, etc to find one constant value that needs
  to be updated.
*/

// TODO add default sort column and sort order here

(function() {
  angular.module('Reviews.UI')

    .constant('REVIEWSCONSTANTS', {
      TYPE: {
        APPROVED: '__a_approved',
        NEW: '__a_new'      
      }
    });
})();