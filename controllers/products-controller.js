angular.module('cCareApp')

.controller('productsController',['$scope', '$routeParams','productService', function($scope,$routeParams, productService) {

	var self = this;
	
	self.products = productService.products;
	
	this.query = '';
	
	this.sortBy= '';

	// TODO: replace null with something that will return everything
	this.type = [null, 'Nebulizer', 'CPAP Machines', 'Baby & Toddler', 'Hospital Beds', 'Oxygen', 'Ventilators', 'Provent Therapy', 'Power Solutions', 'Pain Relief','Mobility Assistive Equipment', 'Incontinence', 'CPAP Masks', ];
	
	this.filterBy = '';	

}])

.controller('productsShowController', ['$routeParams','$scope','productService', function($routeParams,$scope,productService) {

	var productId = $routeParams.id - 1;

	this.product = productService.findProduct(productId);

	console.log(this.product);

	this.products = productService.products;

}])