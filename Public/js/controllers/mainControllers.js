
NEC.controller("mainController", function ($scope,$location) {
    $scope.currentRout= function (path) {
        var loc=$location.path();
        return loc.includes(path)
    };

    $scope.closePopup= function (popup) {
        $("."+popup).fadeOut(250, function () {
            $(".background").fadeOut(250);
        });
    };
});



