(function() {
	'use strict';

	// It should call api and fetch recipes
	angular.module('app')
		.service('recipeService', recipeService);

	function recipeService($http) {

		this.getRecipes = function(callback) {
			$http.get('/api/recipes')
				.then(callback)
		}
	}

})();