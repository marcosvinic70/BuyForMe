(function () {

	'use strict';

	angular
		.module('usuarioModule')
		.factory('usuarioService', function ($http, storage) {

			//var API_KEY = storage.getAPIKey('API_KEY');

			function cadastro(user) {

				var json = {
					nome: user.nome,
					email: user.email,
					senha: user.senha,
					returnSecureToken: true
				};

				var url = 'usuario/new';

				return $http.post(url, json);
			}

			function login(user) {

				var json = {
					email: user.email,
					senha: user.senha,
					returnSecureToken: true
				};

				var url = 'login';

				return $http.post(url, json);
			}

			function sair() {
				console.log(storage.removeUserData());
			}

			return {
				cadastro: cadastro,
				login: login,
				sair: sair
			};
		});
})();