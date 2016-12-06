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

			// Create new Ingredient
			var newIngredient = {
				condition: "",
				amount: "",
				foodItem: ""
			}

			$scope.recipe.ingredients.push(newIngredient);
		}

		$scope.cancelRecipe = cancelRecipe;
		$scope.addAnotherIngredient = addAnotherIngredient;
	}

})();