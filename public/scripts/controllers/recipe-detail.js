(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Controller
	function RecipeDetailController($scope, $routeParams, $location, dataService) {
	
		$scope.isEditing = false;
		$scope.isAdding = false;
		$scope.validationFailed = false;

		// Call service to get data
		// dataService.getRecipes(function(response) {
			
		// 	$scope.id = $routeParams.id;

		// 	if ($scope.id) { // Edit Recipe Screen
			
		// 		$scope.recipes = response.data;	
				
		// 		// Show Edited recipe
		// 		var editItem = response.data.filter(function(entry) {
		// 			return entry._id === $scope.id;
		// 		})[0];

		// 		$scope.recipe = editItem;

		// 		$scope.isEditing = true;
		// 		$scope.isAdding = false;

		// 	} else {

		// 		$scope.isAdding = true;
		// 		$scope.isEditing = false;

		// 		$scope.recipe = {
		// 			name: "",
		// 			description: "",
		// 			category: "",
		// 			prepTime: "",
		// 			cookTime: "",
		// 			ingredients: [],
		// 			steps: []
		// 		}
		// 	}
		
		// });


		dataService.list($routeParams.id, function(response) {
			$scope.recipe = response.data;
		})

		// Save Recipe button click
		function saveRecipe(recipe) {

			// Validate each fields before saving recipe
			if ($scope.recipe.name === "") {
				$scope.validationFailed = true;
			} else {
				$scope.validationFailed = false;
			}

			// $scope.recipes.unshift(recipe);
			// console.log('data is saved');

			// // Need to call service to save the data
			// $location.path('#/');
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