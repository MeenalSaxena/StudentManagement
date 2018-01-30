var myApp = angular.module("myApp");


myApp.controller("sec", function ($scope, $http, saveData){
		
	$scope.info;
	$scope.submit=function(){
			
		console.log($scope.person);
		$http.post("http://localhost/Student/other/1/form.php", $scope.person).then(function (r) { console.log(r.data); console.log(":)") }, function (r) { console.log(r) })

	saveData.student.SContact*=1;
	saveData.student.SCall = new Date(saveData.student.SCall);
	$scope.person = saveData.student;
	console.log(saveData.student);
	}
	$http.get("http://localhost/Student/other/1/form1.php").then(function (resData) {
		$scope.info = resData.data;
		console.log(resData.data);
	}, function (resData) {
		console.log(resData);
	})

}); 


