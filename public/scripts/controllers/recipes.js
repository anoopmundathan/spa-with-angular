(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, $location, recipeService) {
		
		// Call service to get data
		recipeService.getRecipes(function(response) {
			$scope.recipes = response.data;
		});

		$scope.go = function(path) {
			console.log(path);
			$location.path(path);
		}
	}

})();

