'use strict';


// Declare app level module which depends on filters, and services
angular.module('portfolio', ['portfolio.filters', 'portfolio.services', 'portfolio.directives', 'portfolio.controllers','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/lab', {templateUrl: 'partials/project-list.html', controller: 'LabCtrl'});
  	$routeProvider.when('/works', {templateUrl: 'partials/project-list.html', controller: 'WorksCtrl'});
  	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
  	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  	$routeProvider.when('/project/:projectId', {templateUrl: 'partials/project.html', controller: 'ProjectCtrl'});
    $routeProvider.otherwise({redirectTo: '/home', templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  }]);
