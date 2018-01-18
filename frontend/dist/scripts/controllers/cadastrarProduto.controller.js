(function () {

	'use strict';

	angular
		.module('produtoModule')
		.controller('CadastrarProdutoController', function (produtoService, $location, alertService) {

			var vm = this;

			function cadastro(produto) {

				produtoService.cadastroProduto(produto)
					.then(function (response) {

						if (response.status == 200) {
							vm.form.produto = {};
							$location.path('/main');
							alert("Produto cadastrado com sucesso!");

							vm.alert = {
								type: 'success',
								message: 'Produto cadastrado com sucesso'
							};
						}

					}).catch(function (error) {

						var msg = error.data.error.message;
						alertService.addAlert('danger', msg);

						vm.alert = {
							type: 'danger',
							message: msg
						};

					});
			}

			vm.cadastro = cadastro;
		});
})();