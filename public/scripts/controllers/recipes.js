(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, $location, $routeParams, dataService) {

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

		dataService.list(function(response) {
			$scope.recipes = response;
		})

		// GETs all of the categories
		dataService.categories(function(response) {
			$scope.categories = response;
		});

		$scope.startAdding = startAdding;
		$scope.startEditing = startEditing;
		$scope.startDeleting = startDeleting;
	}

})();

