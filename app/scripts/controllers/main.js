'use strict';

angular.module('exampleApp')
  .controller('MainCtrl', function ($scope, $dialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.modal = function() {
      $dialog.dialog().open('views/modal.html', 'MainModalCtrl');
    };
  })
  .controller('MainModalCtrl', function($scope, dialog) {
    $scope.close = function() {
      dialog.close('ok');
    };
  });
