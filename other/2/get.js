var myApp = angular.module("myApp");

myApp.controller("search", function ($scope, $http, saveData,$location) {

    $scope.submit = function () {

        //console.log($scope.person);
        //$http.post("http://localhost/Project1/kk/StudentManagement/searching/get.php", $scope.person).then(function (r) { console.log(r.data); console.log(":)") }, function (r) { console.log(r.data) })


        $http.post("http://localhost/Student/other/2/get.php", $scope.person).then(function (resData) {
            $scope.Students = resData.data;
            console.log(resData.data);
        }, function (resData) {
            console.log(resData);
        })
    }
    $scope.edit = function (Obj) {
           // $scope.meenal=$scope.Students[index].SID;
        saveData.student=Obj;
        $location.url("/form");
             
      

    }
    

}); 


