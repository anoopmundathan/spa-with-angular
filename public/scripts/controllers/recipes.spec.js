describe('RecipeController', function() {
	beforeEach(module('app'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('$scope.recipes', function() {

		var $scope, controller;

		beforeEach(function() {
			$scope = {};
			controller = $controller('RecipesController', {$scope : $scope});
		});

		it('should have recipes', function() {
			expect($scope.recipes).toBeDefined();
		});

		it('should have categories', function() {
			expect($scope.categories).toBeDefined();
		});
	});
});