var app = angular.module("myapp", []);
      app.controller("ContactsController", function($scope) {
        $scope.contacts=[];
        $scope.addContact = function(){
            var payload = {
              'name':$scope.name,
              'email':$scope.email,
              'phone':$scope.phone
              };
              $scope.name = '';
              $scope.email='';
              $scope.phone= '';
              $scope.contacts.push(payload);

        };
      });


    app.controller("ExercisesController", function($scope){

     $scope.box1Counter = 0;
     $scope.box1PlusOne = function () {
       $scope.box1Counter ++;
     };
     $scope.box2Counter = 0;
     $scope.box2PlusOne = function () {
       $scope.box2Counter ++;
     };
     $scope.serving = function () {
       if (scope.box1Counter + $scope.box2Counter % 2) {
         // do something....
       }
     };
});

