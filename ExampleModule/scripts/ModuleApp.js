

var rcApp = angular.module('moduleApp', []);
rcApp.controller('moduleController', ['$scope', '$timeout', function ($scope, $timeout) {
      
    $scope._getCRMAPI = function () {
        var crmAPI = window.parent.crmAPI;
        return crmAPI;
    }
    
}]);