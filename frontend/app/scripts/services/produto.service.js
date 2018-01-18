(function () {

	'use strict';

	angular.module('produtoModule').factory('produtoService', function ($http, storage) {

		//var baseUrl = storage.getBaseUrl();

		function getProdutos() {

			//var url = baseUrl + 'produtos.json';
			var url = 'produtos';

			return $http.get(url);
		}

		function getProduto(idProduto) {

			var url = 'produto/'+ idProduto;
			//var url = baseUrl + 'produtos/' + idProduto + '.json';

			return $http.get(url);
		}

		function getProdutosByUser() {

			var url = 'produtos/' + storage.getUserData().id ;

			return $http.get(url);
		}

		function cadastroProduto(produto) {

			var usuario = storage.getUserData();

			produto.usuario = {};
			produto.usuario.id = usuario.id;
			produto.valor = parseFloat(produto.valor);

			var request = {
				method: 'POST',
				url: 'produto' + '?authenticityToken='+ usuario.idToken,
				data: produto,
				timeout: 4000
			};

			return $http(request);
		}

		function update(produto, idProduto) {

			produto.usuario = storage.getUserData();
			produto.valor = parseFloat(produto.valor);

			var idToken = storage.getUserData().idToken;

			var url = 'produtos/' + idProduto + '?authenticityToken='+ idToken;

			var request = {
				method: 'PUT',
				url: url,
				data: produto,
				timout: 4000
			};

			return $http(request);
		}

		function deletar(idProduto) {

			var idToken = storage.getUserData().idToken;

			return $http.delete('produtos/' + idProduto + '?authenticityToken='+ idToken);
		}

		return {
			deletar: deletar,
			update: update,
			cadastroProduto: cadastroProduto,
			getProdutos: getProdutos,
			getProduto: getProduto,
			getProdutosByUser: getProdutosByUser
		};
	});
})();