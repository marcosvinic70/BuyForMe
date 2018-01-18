(function () {

	angular.module('appModule', [
			'ngRoute',
			'ui.bootstrap',
			'ui.utils.masks',
			'angularUtils.directives.dirPagination',
			'usuarioModule',
			'produtoModule',
			'comentarioModule',
			'myDirectives',
			'oitozero.ngSweetAlert'
		])

		.config(function ($routeProvider, $locationProvider) {

			$locationProvider.html5Mode(true);
			$routeProvider
				.when('/', {
					templateUrl: 'sections/main.html',
					controller: 'MainController',
					controllerAs: 'Main'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
})(jQuery);