'use strict';

const recipeApp = angular.module('app', ['ngRoute']);

recipeApp.config(($routeProvider) => {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/recipes_old.html',
      controller: 'recipeCtrl'
    }).
    when('/detail', {
      templateUrl: 'templates/recipe-detail.html',
      controller: 'recipeDetailCtrl'
    }).
    when('/add', {
      controller: 'recipeDetailCtrl',
      templateUrl: 'templates/recipe-detail.html'
    }).
    otherwise({
      redirectTo: '/'
    });
});

recipeApp.controller('recipeCtrl', function($scope, $http, $location) {

  $http.get('/api/recipes')
    .success(function(data) {
      $scope.recipes = data;
    });

  // $scope.addRecipe = () => {
  //     console.log('Add clicked');
  // }

  $scope.go = function ( path ) {
    console.log(path);
    $location.path( path );
  };

});

recipeApp.controller('recipeDetailCtrl', function($scope) {

});
