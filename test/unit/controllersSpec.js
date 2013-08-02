'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
	beforeEach(module('portfolio.controllers'));

	describe('HomeCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/projects.json').
          respond([{title: 'MediaPick'}]);

      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));

	it('should ....', inject(function() {
    	//spec body
  	}));

  	it('should ....', inject(function() {
    	//spec body
  	}));
});
