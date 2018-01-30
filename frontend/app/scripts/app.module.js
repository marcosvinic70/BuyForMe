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
			'19degrees.ngSweetAlert2'
		])

		.config(function ($routeProvider, $locationProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: 'sections/produto-lista.html',
					controller: 'ListarProdutoController',
					controllerAs: 'ListarProduto'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
})(jQuery);