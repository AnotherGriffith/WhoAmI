(function () {
    'use strict';
    /*global angular */
    var app = angular.module('myApp', []);
    
    //create controller with application variables and functions
    app.controller('myCtrl', function ($scope) {
        $scope.maleCounter = 0;
        $scope.femaleCounter = 0;
        
        //calculate percent of male vote clicks
        $scope.malePercent = function () {
            if ($scope.maleCounter === 0) {
                return 0;
            }
            return Math.round($scope.maleCounter / ($scope.maleCounter + $scope.femaleCounter) * 100);
        };
        
        //calculate percent of female vote clicks
        $scope.femalePercent = function () {
            if ($scope.femaleCounter === 0) {
                return 0;
            }
            return Math.round($scope.femaleCounter / ($scope.maleCounter + $scope.femaleCounter) * 100);
        };
        
        //increment female vote count
        $scope.incrementFemale = function () {
            $scope.femaleCounter += 1;
        };
        
        //increment male vote count
        $scope.incrementMale = function () {
            $scope.maleCounter += 1;
        };
    });
}());