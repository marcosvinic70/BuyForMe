(function () {

	'use strict';

	angular
		.module('usuarioModule')
		.factory('usuarioService', function ($http, storage) {

			var API_KEY = storage.getAPIKey('API_KEY');

			function cadastro(user) {

				var json = {
					email: user.email,
					password: user.senha,
					returnSecureToken: true
				};

				var url =
					'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=';

				return $http.post(url + API_KEY, json);
			}

			function login(user) {

				var json = {
					email: user.email,
					password: user.senha,
					returnSecureToken: true
				};

				var url =
					'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';

				return $http.post(url + API_KEY, json);
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