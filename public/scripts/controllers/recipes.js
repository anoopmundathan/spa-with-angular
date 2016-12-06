(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, $location, recipeService) {

		$scope.isEditing = false;

		// Add Recipe
		function startAdding(path) {
			$location.path(path);
		}

		// Edit Recipe
		function startEditing(recipe) {
			$scope.isEditing = true;
		}

		// Delete Recipe
		function startDeleting(recipe, index) {
			$scope.recipes.splice(index, 1);
		}

		// Call service to get data
		recipeService.getRecipes(function(response) {
			$scope.recipes = response.data;
		});

		
		$scope.startAdding = startAdding;
		$scope.startEditing = startEditing;
		$scope.startDeleting = startDeleting;
	}

})();

