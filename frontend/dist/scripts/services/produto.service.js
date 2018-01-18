(function () {

	'use strict';

	angular.module('produtoModule').factory('produtoService', function ($http, storage) {

		var baseUrl = storage.getBaseUrl();

		function getProdutos() {

			var url = baseUrl + 'produtos.json';

			return $http.get(url);
		}

		function getProduto(idProduto) {

			var url = baseUrl + 'produtos/' + idProduto + '.json';

			return $http.get(url);
		}

		function getProdutosByUser() {

			var url = baseUrl + 'produtos.json?orderBy="usuario"&equalTo="' + storage.getUserData().localId + '"';

			return $http.get(url);
		}

		function cadastroProduto(produto) {

			produto.usuario = storage.getUserData().localId;
			produto.valor = parseFloat(produto.valor);

			var request = {
				method: 'POST',
				url: baseUrl + 'produtos.json?auth=' + storage.getUserData().idToken,
				data: produto,
				timeout: 4000
			};

			return $http(request);
		}

		function save(produto, idProduto) {

			produto.usuario = storage.getUserData().localId;
			produto.valor = parseFloat(produto.valor);

			var url =
				baseUrl + 'produtos/' +
				idProduto +
				'.json?auth=' +
				storage.getUserData().idToken;

			var request = {
				method: 'PUT',
				url: url,
				data: produto,
				timout: 4000
			};

			return $http(request);
		}

		function deletar(idProduto) {

			return $http.delete(
				baseUrl + 'produtos/' +
				idProduto +
				'.json?auth=' +
				storage.getUserData().idToken
			);
		}

		return {
			deletar: deletar,
			save: save,
			cadastroProduto: cadastroProduto,
			getProdutos: getProdutos,
			getProduto: getProduto,
			getProdutosByUser: getProdutosByUser
		};
	});
})();