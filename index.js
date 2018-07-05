var app = angular.module("myApp", ["ngRoute","firebase"]);


app.factory("Profile", ["$firebaseObject",
function($firebaseObject) {
  return function(username) {
    // create a reference to the database node where we will store our data
    // var ref = firebase.database().ref("test").push("student");
    var ref = firebase.database().ref("test").push();
    var profileRef = ref.child(username);

    // return it as a synchronized object
    return $firebaseObject(profileRef);
  }
}
]);





app.config(function ($routeProvider) {
  $routeProvider.when("/form", {
            templateUrl:"other/1/index1.html",
            controller:"sec"
            
            
        })
    $routeProvider.when("/search", {
        templateUrl: "other/2/index2.html",
        controller: "search"


    })
    $routeProvider.when("/registration", {
        templateUrl: "other/3/index3.html",


    })
    $routeProvider.when("/enquiry", {
        templateUrl: "other/4/index4.html",


    })

    $routeProvider.when("/update", {
        templateUrl: "other/5/update.html",


    })


});

app.service("saveData",function()
{});