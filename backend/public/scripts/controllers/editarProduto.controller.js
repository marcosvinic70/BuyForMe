(function () {

	'use strict';

	angular
		.module('produtoModule')
		.controller('EditarProdutoController', function (produtoService, $location, $routeParams, sweetAlert) {

			var vm = this;
			vm.form = {};

			produtoService.getProduto($routeParams.id).then(function (response) {

				var produto = response.data;
				vm.form.produto = angular.copy(produto);
			});

			vm.update = function update(produto) {

				produtoService.update(produto, $routeParams.id).then(function () {

					sweetAlert.swal(
						'Bom trabalho!',
						'Produto alterado com sucesso!',
						'success'
					);

					vm.retornar();

				}).catch(function (error) {

					sweetAlert.swal(
						String(error.status),
						error.data,
						'error'
					);

				});
			};

			vm.retornar = function retornar() {

				vm.form.produto = {};
				$location.path('/produtos');
			};
		});
})();