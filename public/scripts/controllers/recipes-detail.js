(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Controller
	function RecipeDetailController($scope, $routeParams, $location, recipeService) {
		
	
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
			console.log($scope.recipe);
		});

		// Save Recipe button click
		function saveRecipe(recipe) {
			console.log(recipe);
		}

		// Cancel Recipe button click
		function cancelRecipe() {
			$location.path('#/');
		}

		function addAnotherIngredient() {

			// Get Index of currently being edited item
			var index = $scope.recipes.findIndex(function(item) {
				return item._id == $scope.id;
			});

			// Create new Ingredient
			var newIngredient = {
				condition: "condition",
				amount: "10",
				foodItem: "foodItem"
			}

			// $scope.recipes[index].ingredients.push(newIngredient);
			$scope.recipe.ingredients.push(newIngredient);
			console.log($scope.recipe);
		}

		$scope.cancelRecipe = cancelRecipe;
		$scope.addAnotherIngredient = addAnotherIngredient;
	}

})();