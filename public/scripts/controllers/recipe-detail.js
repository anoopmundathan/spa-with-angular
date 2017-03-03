(function() {

	angular
	.module('app')
	.controller('RecipeDetailController', RecipeDetailController);

	// Recipe Detail Controller
	function RecipeDetailController($scope, $routeParams, $location, $window, dataService) {
	
		$scope.recipe = {};
		$scope.recipe.ingredients = [];
		$scope.recipe.steps = [];

		$scope.isEditing = false;
		$scope.isAdding = false;
		$scope.validationFailed = false;

		if ($routeParams.id) {
			$scope.isEditing = true;
			$scope.isAdding = false;
		} else {
			$scope.isAdding = true;
			$scope.isEditing = false;
			$scope.title = "Add Recipe"
		}

		dataService.categories(function(response) {
			$scope.categories = response.data;
		});

		dataService.fooditems(function(response) {
			$scope.foodItems = response.data;
		});


		if ($scope.isEditing) {
			
			dataService.find($routeParams.id, function(response) {
				$scope.recipe = response.data;
			});
		}		

		// Save Recipe button click
		function saveRecipe(recipe) {

			$scope.errorMessages = [];

			// Validate each fields before saving recipe
			if (validateFields()) {
				$scope.validationFailed = true;
			} else {
				$scope.validationFailed = false;
			}
			
			if (!$scope.validationFailed) {

				if ($scope.isEditing) {
					dataService.update($scope.recipe._id, $scope.recipe, function() {
						// $location.path('#/');
						$window.location.href = "#/";
						$window.location.reload();
					});
				}
			
				if ($scope.isAdding) {
					console.log($scope.recipe);
					dataService.add($scope.recipe, function() {
						// $location.path('#/');
						$window.location.href = "#/";
						$window.location.reload();
					});					
				}
			} // validationFailed
			
		} // saveRecipe

		// Validate all fields before save
		function validateFields() {
			// Check Name
			if ($scope.recipe.name === "") {
				$scope.errorMessages.push('Name is not entered');
			}

			// Check Description
			if ($scope.recipe.description === "") {
				$scope.errorMessages.push('Description is not entered');
			}

			// Check category
			if ($scope.recipe.category === undefined) {
				$scope.errorMessages.push('Category is not entered');
			}

			// Check Prep Time
			if ($scope.recipe.prepTime === undefined) {
				$scope.errorMessages.push('Prep Time is not entered');
			}

			// Check Cook Time 
			if ($scope.recipe.cookTime === undefined) {
				$scope.errorMessages.push('Cook Time is not entered');
			}

			// Check Ingredients
			if ($scope.recipe.ingredients.length < 1) {
				$scope.errorMessages.push('Ingredients are not added');
			}

			// Check Steps
			if ($scope.recipe.steps.length < 1) {
				$scope.errorMessages.push('Steps are not added');
			} 

			if ($scope.errorMessages.length > 0) {
				return true;
			} else {
				return false;
			}
		}

		// Cancel Recipe button click
		function cancelRecipe() {
			$location.path('#/');
		}

		function addAnotherIngredient() {

			var newIngredient = {
				condition: "condition",
				amount: "Amount",
				foodItem: "FoodItem"
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