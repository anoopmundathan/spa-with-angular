(function() {

	angular
	.module('app')
	.controller('RecipesController', RecipesController);

	// Controller
	function RecipesController($scope, $location, recipeService) {

		$scope.isEditing = false;

		function startAdding(path) {
			console.log('hellokk');
			$location.path(path);
		}
		// Call service to get data
		recipeService.getRecipes(function(response) {
			$scope.recipes = response.data;
		});

		
		$scope.startAdding = startAdding;
		
	}

})();

