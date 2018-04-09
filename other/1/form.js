var myApp = angular.module("myApp");


myApp.controller("sec", function ($scope, $http, saveData,Profile){
		
	// $scope.info;
	// $scope.submit=function(){
			
	// 	console.log($scope.person);
	// 	$http.post("http://localhost/Student/other/1/form.php", $scope.person).then(function (r) { console.log(r.data); console.log(":)") }, function (r) { console.log(r) })

	// saveData.student.SContact*=1;
	// saveData.student.SCall = new Date(saveData.student.SCall);
	// $scope.person = saveData.student;
	// console.log(saveData.student);
	// }
	// $http.get("http://localhost/Student/other/1/form1.php").then(function (resData) {
	// 	$scope.info = resData.data;
	// 	console.log(resData.data);
	// }, function (resData) {
	// 	console.log(resData);
	// })
	$scope.person = Profile("Student");
	$scope.upd=function()
    {
    // $scope.person = Profile("Mayank");
    }

	$scope.saveProfile = function() {
		$scope.person.date=$scope.person.SCall.toString();
	   $scope.person.$save().then(function() {
		 alert('Profile saved!');
		 $scope.person=[];
		 getData();
	   }).catch(function(error) {
		 alert('Error!');
	   });
	 };

	 function getData()
	 {
	 firebase.database().ref("test").once('value').then(function(data)
	 {//console.log(data.val());
		$scope.data=data.val();
		console.log($scope.data);
	})
};
getData();


}); 


