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
				}).then(callback);
			},

			find: function(id, callback) {
				$http({
					method: 'GET',
					url: '/api/recipes/' + id,
					cache: true
				}).then(callback);
			},

			add: function(recipe, callback) {
				$http({
					method: 'POST',
					url: '/api/recipes/',
					data: recipe
				}).then(callback);
			},

			update: function(id, recipe, callback) {
				$http({
					method: 'PUT',
					url: '/api/recipes/' + id,
					data: recipe
				}).then(callback);
			},

			delete: function(id, callback) {
				$http({
					method: 'DELETE',
					url: '/api/recipes/' + id
				}).then(callback);
			},

			categories: function(callback) {
				$http({
					method: 'GET',
					url: '/api/categories/',
					cache: true
				}).then(callback);
			},

			fooditems: function(callback) {
				$http({
					method: 'GET',
					url: '/api/fooditems/',
					cache: true
				}).then(callback);
			}

		}
	}

})();