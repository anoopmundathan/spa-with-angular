(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, recipeService) {
		
		// Recipes
		recipeService.getRecipes(function(response) {
			$scope.recipes = response.data;
		});
	}

})();

