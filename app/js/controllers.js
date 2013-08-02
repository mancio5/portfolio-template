'use strict';

/* Controllers */

angular.module('portfolio.controllers', [])
  	.controller('HomeCtrl', ['$scope','$http',function($scope,$http) {
  		$scope.title = "Home";
  		$scope.type ="work";
  		$scope.display = "homepage"
  		$http.get('data/projects.json').success(function(data) {
    		$scope.projects = data;
  		});
  	}])
  	.controller('LabCtrl', ['$scope','$http',function($scope,$http) {
  		$scope.title = "Lab";
  		$scope.type ="lab";
  		$http.get('data/projects.json').success(function(data) {
    		$scope.projects = data;
  		});
  	}])
  	.controller('WorksCtrl', ['$scope','$http',function($scope,$http) {
  		$scope.title = "Works";
  		$scope.type ="work";
  		$http.get('data/projects.json').success(function(data) {
    		$scope.projects = data;
  		});
  	}])
  	.controller('ProjectCtrl', ['$scope','$routeParams', '$http',function($scope,$routeParams,$http) {
        $scope.title = "Project"+$routeParams.projectId;
        $http.get('data/' + $routeParams.projectId +'/'+$routeParams.projectId+'.json').success(function(data) {
            $scope.data = data;
        })
        $scope.directory = $scope.data[0].type;
    }])
  	.controller('ContactCtrl', ['$scope',function($scope) {
  		$scope.title = "Contact";
  	}])
  	.controller('AboutCtrl', ['$scope',function($scope) {
  		$scope.title = "About";
  	}])

