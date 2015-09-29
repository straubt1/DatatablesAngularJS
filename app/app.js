var app = angular.module("mvpapp", ['ngResource', 'ngRoute', 'datatables']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/grid1', {
            templateUrl: "app/views/grid1.html",
            controller: "grid1Contoller"
        })
        .when('/grid2', {
            templateUrl: "app/views/grid2.html",
            controller: "grid2Contoller"
        })
        .when('/grid3', {
            templateUrl: "app/views/grid3.html",
            controller: "grid3Contoller"
        })
        .otherwise({
            redirectTo: "/grid3"
        });
});
 
