(function() {
	'use strict';

	// It should call api and fetch recipes
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
			},

			add: function(recipe, callback) {
				$http({
					method: 'POST',
					url: '/api/recipes/',
					data: recipe
				}).success(callback);
			},

			update: function(id, recipe, callback) {
				$http({
					method: 'PUT',
					url: '/api/recipes/' + id,
					data: recipe
				}).success(callback);
			},

			categories: function(callback) {
				$http({
					method: 'GET',
					url: '/api/categories/',
					cache: true
				}).success(callback);
			}

		}
	}

})();