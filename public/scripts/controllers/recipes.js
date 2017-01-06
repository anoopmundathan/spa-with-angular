(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, $location, $routeParams, dataService) {

		// Add Recipe
		function addRecipe(path) {
			$location.path(path);
		}

		// Delete Recipe
		function startDeleting(recipe, index) {
			// $scope.recipes.splice(index, 1);
			dataService.delete(recipe._id, function() {
				$location.path('#/');
			});
		}

		dataService.list(function(response) {
			$scope.recipes = response;
		})

		// GETs all of the categories
		dataService.categories(function(response) {
			$scope.categories = response;
		});

		$scope.addRecipe = addRecipe;
		$scope.startDeleting = startDeleting;
	}

})();

