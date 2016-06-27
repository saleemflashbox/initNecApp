/**
 * Created by MohammedSaleem on 18/06/16.
 */

(function () {
    var circularLoaderUI=angular.module('circularLoaderUI',[]);

    circularLoaderUI.directive('circularLoader',function () {
        return {
            templateUrl: 'appDirectives/templates/circularLoader.html'
        }
    })
})();