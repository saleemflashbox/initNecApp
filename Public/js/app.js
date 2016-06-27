/**
 * Created by MohammedSaleem on 11/11/15.
 */

var dependencies = ['ui.router'];

var NEC = angular.module("NEC", dependencies);

NEC.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin",
        templateUrl: 'templates/credentials/admin.html'
    }).state('admin.signIn', {
        url: "/signIn",
        templateUrl: 'templates/credentials/signIn.html'
    }).state('admin.signUp', {
        url: "/signUp",
        templateUrl: 'templates/credentials/signUp.html'
    });

    $urlRouterProvider.otherwise("/admin/signIn");
});


NEC.directive('repeatDone', function () {
    return function (scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
});