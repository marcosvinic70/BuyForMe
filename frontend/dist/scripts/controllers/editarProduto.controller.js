(function () {

	'use strict';

	angular
		.module('produtoModule')
		.controller('EditarProdutoController', function (
			produtoService,
			$location,
			$routeParams
		) {
			var vm = this;
			vm.form = {};

			produtoService.getProdutos().then(function (response) {

				var produtos = response.data;
				var produto = produtos[$routeParams.id];
				vm.form.produto = angular.copy(produto);

			});

			vm.save = function save(produto) {

				produtoService.save(produto, $routeParams.id).then(function () {

					alert('Produto alterado com sucesso!');
					vm.retornar();

				});
			};

			vm.retornar = function retornar() {

				vm.form.produto = {};
				$location.path('/produtos');
			};
		});
})();