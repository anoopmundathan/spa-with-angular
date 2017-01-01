(function() {
	'use strict';

	// It should call api and fetch recipes
	// angular.module('app')
	// 	.service('dataService', dataService);

	angular.module('app')
		.factory('dataService', dataService);

	function dataService($http) {
		return {

			list: function(callback) {
				$http({
					method: 'GET', 
					url: '/api/recipes',
					cache: true
				}).success(callback);
			},

			find: function(id, callback) {
				$http({
					method: 'GET',
					url: '/api/recipes/' + id,
					cache: true
				}).success(callback);
			}
		}
	}

	// function dataService($http) {

	// 	this.getRecipes = function(callback) {
	// 		$http.get('/api/recipes')
	// 			.then(callback)
	// 	}
	// }

})();