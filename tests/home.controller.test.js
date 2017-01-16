describe('home controller', function () {

  beforeEach(function() {
    module('reviewapp')
    module('ngStorage')
    module('ui.router')
    module('toastr')
    module('Home.UI')
    module('Reviews.UI')
  });

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Controller: Home ListController', function () {
		it('controller to be defined', function () {
			var controller = $controller('HomeController', {});
			expect(controller).toBeDefined();
			expect(controller.testModel).toBeDefined();
    	expect(controller.testModel).toEqual("test");
		});	
	});

});