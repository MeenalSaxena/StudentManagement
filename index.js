var app = angular.module("myApp", ["ngRoute"]);
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