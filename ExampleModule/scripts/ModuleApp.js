

var rcApp = angular.module('moduleApp', []);
rcApp.controller('moduleController', ['$scope', function ($scope) {
      
    $scope._getCRMAPI = function () {
        
        ///Use this configuration, when testing this as standalone page for testing 
        //You can get an Access Token from  https://xrm.tools/AccessToken 
        
        //var apiconfig = { APIUrl: 'https://orgname.crm.dynamics.com/api/data/v8.0/', AccessToken: '<AccessToken>' };
        //var crmAPI = new CRMWebAPI(apiconfig);
        //return crmAPI;
        
        
        //Use this configuration for real use as a module installed into Xrm.Tools site
        var crmAPI = window.parent.crmAPI;
        return crmAPI;
    }
    
}]);