(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Controller
	function RecipeDetailController($scope, $routeParams, $location, dataService) {
	
		$scope.isEditing = false;
		$scope.isAdding = false;
		$scope.validationFailed = false;

		dataService.find($routeParams.id, function(response) {
			$scope.recipe = response;
		});

		// Save Recipe button click
		function saveRecipe(recipe) {

			// Validate each fields before saving recipe
			if ($scope.recipe.name === "") {
				$scope.validationFailed = true;
			} else {
				$scope.validationFailed = false;

				dataService.update($scope.recipe._id, $scope.recipe, function() {
					$location.path('#/');
				});
			}
			
		}

		// Cancel Recipe button click
		function cancelRecipe() {
			$location.path('#/');
		}

		function addAnotherIngredient() {

			// Create new Ingredient
			var newIngredient = {
				condition: "1",
				amount: "2",
				foodItem: "3"
			}

			$scope.recipe.ingredients.push(newIngredient);
		}

		// Delete selected recipe ingredient
		function deleteIngredient(index) {
			$scope.recipe.ingredients.splice(index, 1);
		}

		// Add new step
		function addAnotherStep() {
			var newStep = {
				description: "Enter new step"
			}

			$scope.recipe.steps.push(newStep);
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
		$scope.addAnotherStep = addAnotherStep;
	}

})();