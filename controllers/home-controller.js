angular.module('cCareApp')

.controller('homeController', ['$location', function($location) {

	var self = this;
	self.name = "Jensen";

	self.allProducts = function() {
		$location.path('/products');
	};

}]);