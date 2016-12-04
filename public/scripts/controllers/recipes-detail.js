(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Controller
	function RecipeDetailController($scope, recipeService) {
		
		// Call service to get data
		recipeService.getRecipes(function(response) {
			$scope.recipes = response.data;
			console.log($scope.recipes);
		});
	}

})();