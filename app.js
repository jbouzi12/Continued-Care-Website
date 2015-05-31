angular.module("cCareApp", ['ngRoute', 'ngResource'])

.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl:"pages/home.html",
		controller:"homeController",
		controllerAs:"homeCtrl"
	})

	.when('/products', {
		templateUrl:"pages/products-index.html",
		controller:"productsController",
		controllerAs:"productsCtrl"
	})

	.when('/products/:id', {
		templateUrl:"pages/products-show.html",
		controller:"productsShowController",
		controllerAs:"showCtrl"
	})
})
