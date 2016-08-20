/**
 * Created by Suhas on 12/5/2015.
 */


NEC.controller('loginCtrl', function ($scope, $http, $window, $location, $state) {

    $scope.user={};
    $scope.checkValidation = function (user) {
        $scope.loginLoader = true;

        $http
            .post('/login', user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $scope.loginLoader = false;
                $state.go('app.linksMain.assetLinks')

            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;
                $scope.isAuthenticated = false;
                // Handle login errors here
                $scope.error = 'Error: Invalid user or password';
                $scope.welcome = '';
                $scope.loginLoader = false;
            });
    };

    $scope.logout = function () {
        delete $window.sessionStorage.token;
        console.log($window.sessionStorage.token);
        $state.go('/login')
    };
    $scope.signUp = function (user) {
        console.log("_____inside login_____________");
        console.log(user);
        $http
            .post('/signup', user)
            .success(function (data, status, headers, config) {
                console.log(data);
                $scope.successMessage = "Successfully registered Please login";
                $state.go('admin.signIn')
            })
            .error(function (data, status, headers, config) {
                $scope.error = data;
            });
    };

    $scope.enterToLogin = function (event) {
        if(event.keyCode == 13) {
            $scope.checkValidation($scope.user);
        }
    }
});

