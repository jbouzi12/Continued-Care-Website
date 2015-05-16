angular.module('cCareApp')

.directive('ccareHeader', function() {

	return {
		restrict:'EA',
		templateUrl:"pages/directives/ccare-header.html"
	};

})

.directive('ccareFooter', function() {

	return {
		restrict:'EA',
		templateUrl:"pages/directives/ccare-footer.html"
	};

})

.directive('searchCategory', function() {

	return {
		replace:true,
		restrict:'EA',
		templateUrl:'pages/directives/search-category.html',
		// link:function(scope, element, attrs) {
		// 	scope.categories = Category.query();
		// }
	}


})
// .directive('nwCategorySelect', function(Category) {

// 	return {

// 		replace: true,
// 		templateUrl:"pages/directives/nw-category-select.html",
// 		controller:function($scope) {},
// 		link:function(scope, element, attrs) {

// 			scope.categories = Category.query();
// 		}
// 	}
// })