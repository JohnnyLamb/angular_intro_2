var app = angular.module("myapp", []);
      app.controller("MainController", ['$scope',function($scope) {
          $scope.hello = {};
          $scope.hello.title = "Worldy yay";
          $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
          $scope.symbols = ["&spades;","&clubs;","&hearts;","&diams;"];

          $scope.dupes =[1,1,2,5,6,9,9,9];

      }]);


