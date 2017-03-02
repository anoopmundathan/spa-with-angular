(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Recipe Controller
	function RecipesController($scope, $location, dataService) {

		// Displays a list of recipes
		dataService.list(function(response) {
			$scope.recipes = response.data;
		});

		// GETs all of the categories
		dataService.categories(function(response) {
			$scope.categories = response.data;
		});

		// Add Recipe
		function addRecipe(path) {
			$location.path(path);
		}

		// Delete Recipe
		function deleteRecipe(recipe, index) {
			dataService.delete(recipe._id, function() {
				$scope.recipes.splice(index, 1);	
			});
		}

		// Revealing pattern, expose methods
		$scope.addRecipe = addRecipe;
		$scope.deleteRecipe = deleteRecipe;
	}

})();

