/**
 * Created by MohammedSaleem on 11/11/15.
 */

var dependencies = ['ui.router','circularLoaderUI','hrLoaderUI'];

var NEC = angular.module("NEC", dependencies);

NEC.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin",
        templateUrl: 'credentials/admin.html',
        controller: 'loginCtrl'
    })
        .state('admin.signIn', {
            url: "/signIn",
            templateUrl: 'credentials/signIn.html'
        })
        .state('admin.signUp', {
            url: "/signUp",
            templateUrl: 'credentials/signUp.html'
        })
        .state('app', {
            url: "/app",
            templateUrl: 'templates/app.html'
        })
        .state('app.dashboard', {
            url: "/dashboard",
            templateUrl: 'templates/dashboard.html'
        });

    $urlRouterProvider.otherwise("/app");
});


NEC.directive('repeatDone', function () {
    return function (scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
});