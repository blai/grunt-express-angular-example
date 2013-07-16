'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('exampleApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of sampleUsers to the scope', function () {
    expect(scope.sampleUsers.length).toBe(2);
  });
});
