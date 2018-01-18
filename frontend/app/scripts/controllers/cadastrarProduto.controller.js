(function () {

	'use strict';

	angular
		.module('produtoModule')
		.controller('CadastrarProdutoController', function (produtoService, $location, sweetAlert) {

			var vm = this;

			function cadastro(produto) {

				produtoService.cadastroProduto(produto)
					.then(function (response) {

						if (response.status == 200) {
							vm.form.produto = {};

							sweetAlert.swal(
								'Bom trabalho!',
								'Produto cadastrado com sucesso!',
								'success'
							);

							$location.path('/');
						}

					}).catch(function (error) {

						sweetAlert.swal(
							String(error.status),
							error.data,
							'error'
						);

					});
			}

			vm.cadastro = cadastro;
		});
})();