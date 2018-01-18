(function () {

    'use strict';

    angular.module('myDirectives', [])
        .directive('myMain', function () {

            return {
                restrict: 'E',
                templateUrl: '/sections/my-main.html',
                controller: 'MainController',
                controllerAs: 'Main'
            };
        });
})();