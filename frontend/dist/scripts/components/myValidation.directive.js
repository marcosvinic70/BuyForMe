(function () {

    'use strict';

    angular.module('myDirectives', [])
        .directive('myValidation', function () {

            return {
                restrict: 'E',
                templateUrl: '/sections/my-validation.html',
            };
        });
})();