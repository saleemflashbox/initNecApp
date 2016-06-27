/**
 * Created by MohammedSaleem on 18/06/16.
 */
(function () {
    var hrLoaderUI=angular.module('hrLoaderUI',[]);

    hrLoaderUI.directive('hrLoader',function () {
        return {
            templateUrl: 'appDirectives/templates/hrLoader.html'
        }
    })
})();