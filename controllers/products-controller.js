angular.module('cCareApp')

.controller('productsController',['$scope', '$routeParams','productService', function($scope,$routeParams, productService) {

	var self = this;
	self.products = productService.products;
	this.query = '';
	this.sortBy= '';


	// $scope.predicate = 'name';
	// $scope.orderBy = 'A-Z'
	// $scope.reverse = true;


	// $scope.orderByOptions = function(category) {

	// 	if ($scope.orderBy == 'A-Z') {
	// 		$scope.predicate="name";
	// 		$scope.reverse = false;
	// 	} 
	// 	else if ($scope.orderBy == 'Z-A') {
	// 		$scope.predicate = "name";
	// 		$scope.reverse = true;
	// 	} 
	// 	else if ($scope.orderBy == 'Low to High') {
	// 		$scope.predicate = 'price';
	// 		$scope.reverse = false;
	// 	}
	// 	else if ($scope.orderBy == 'High to Low') {
	// 		$scope.predicate = 'price';
	// 		$scope.reverse = true;
	// 	} else {
	// 		$scope.predicate = 'name';
	// 		$scope.reverse = true;
	// 	}

	// }	

}])

.controller('productsShowController', ['$routeParams','$scope','productService', function($routeParams,$scope,productService) {

	var productId = $routeParams.id - 1;

	this.product = productService.findProduct(productId);

	console.log(this.product);

	this.products = productService.products;

}])