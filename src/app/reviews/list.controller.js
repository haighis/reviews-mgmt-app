(function() {
  'use strict';
  angular
    .module('Reviews.UI')
    .controller('ListController', ListController);

    ListController.$inject = ['ReviewsService','$log'];
  
  function ListController(ReviewsService, $log) {
    var vm = this;

    vm.collection = [];

    vm.sortColumn = 'name'; // set the default sort column
    vm.sortOrder = false;  // set the default sort order

    vm.curPage = 0;
    vm.pageSize = 5;
    vm.numberOfPages = numberOfPages;
    vm.save = save;
    vm.review = {};
    activate();

    function activate() {           
      vm.collection = ReviewsService.getAllReviews();
      $log.log('I am in the Reviews List controller in activate' );
    }

    function numberOfPages() {
      var numPages = 0;
      if(angular.isDefined(vm.collection)) {
        numPages = vm.collection.length;
      }
      return Math.ceil(numPages / vm.pageSize);   
    }

    function save() {
      if(angular.isDefined(vm.review.title) && angular.isDefined(vm.review.desc)) {
        ReviewsService.saveReview(vm.review);
        vm.review = {};
        // refresh
        activate();
      }
    }
  }

  angular.module('Reviews.UI').filter('pagination', function()
  {
    return function(input, start)
    {
      if(input) {
        start = +start;
        return input.slice(start);
      }
    };
  });
})();
