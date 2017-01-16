(function() {
  'use strict';

  angular
    .module('Reviews.UI')
    .factory('ReviewsService', ReviewsService);
    
    ReviewsService.$Inject = [
    '$localStorage'
    ];

	function ReviewsService($localStorage) {	    
	    var service = {
	        saveReview: saveReview,
	        getAllReviews: getAllReviews
    	};

        return service;

         /* Save a single Review */
        function saveReview(review) {    
            var reviews = [];
            if(angular.isDefined($localStorage.reviews)) {
                reviews = $localStorage.reviews;    
            }
            reviews.push(review);  
            $localStorage.reviews = reviews;            
        };

        /* Get all Reviews */
        function getAllReviews() {
            return $localStorage.reviews;
        };
    }
})();