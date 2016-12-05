(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Controller
	function RecipeDetailController($scope, $routeParams, recipeService) {
		
		$scope.isEditing = false;
		$scope.isAdding = false;

		// Call service to get data
		recipeService.getRecipes(function(response) {
			
			$scope.id = $routeParams.id;
			$scope.recipes = response.data;
		
			var editItem = response.data.filter(function(entry) {
				return entry._id === $scope.id;
			})[0];

			$scope.recipe = editItem;
		});


	}

})();