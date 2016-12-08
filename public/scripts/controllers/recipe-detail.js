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
		
			// Show Edited recipe
			var editItem = response.data.filter(function(entry) {
				return entry._id === $scope.id;
			})[0];

			$scope.recipe = editItem;
		});

		// Save Recipe button click
		function saveRecipe(recipe) {

			// Call recipe service to save data to server
			$scope.recipes.unshift(recipe);
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

		// Delete selected recipe ingredient
		function deleteIngredient(index) {
			$scope.recipe.ingredients.splice(index, 1);
		}

		//Delete Step
		function deleteStep(index) {
			$scope.recipe.steps.splice(index, 1);
		}

		$scope.saveRecipe = saveRecipe;
		$scope.cancelRecipe = cancelRecipe;
		$scope.addAnotherIngredient = addAnotherIngredient;
		$scope.deleteIngredient = deleteIngredient;
		$scope.deleteStep = deleteStep;
	}

})();