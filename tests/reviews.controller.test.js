describe('reviews controller', function () {
	
	beforeEach(function() {
		module('reviewapp')
		module('ngStorage')
		module('ui.router')
		module('toastr')
		module('Home.UI')
		module('Reviews.UI')
	});

	var $controller, ListController, ReviewsServiceFactory;

	  // Mock the list of reviews we expect to use in our controller
	var reviewsList = [
		{ title: 'Good', desc: 'it went well' },
		{ title: 'Not well', desc: 'it did not go well' },
		{ title: 'Do better', desc: 'let us try to do this better next' }
	];

	beforeEach(inject(function(_$controller_, _ReviewsService_){
		$controller = _$controller_;
		ReviewsServiceFactory = _ReviewsService_;

		// Spy and force the return value when ReviewsService.getAllReviews() is called
	    spyOn(ReviewsServiceFactory, 'getAllReviews').and.callFake(function() {
	      return reviewsList;
	    });

		ListController = $controller('ListController', { ReviewsService: ReviewsServiceFactory });
	}));
	
	it('List Controller should be defined', function() {
		expect(ListController).toBeDefined();
  	});

	it('List Controller ReviewsService to be defined on controller', function() {
		expect(ReviewsServiceFactory).toBeDefined();
  	});

  	it('ReviewsService get all reviews to have been called', function() {
		expect(ReviewsServiceFactory.getAllReviews).toHaveBeenCalled();
  	});

	it('List Controller collection of data', function() {
		expect(ListController.collection).toEqual(reviewsList);
  	});
});