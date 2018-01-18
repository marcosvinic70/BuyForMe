(function () {

	'use strict';

	angular
		.module('usuarioModule')
		.controller('UsuarioLoginController', function (usuarioService, $location, storage, sweetAlert) {

			var vm = this;

			vm.login = function login(user) {

				usuarioService.login(user).then(function (response) {
					storage.setUserData(response.data);

					sweetAlert.swal(
						'Bem-vindo!',
						'Login realizado com sucesso!',
						'success'
					);

					$location.path('/main');

				}).catch(function (error) {

					sweetAlert.swal(
						String(error.status),
						error.data,
						'error'
					);

				});
			};
		});
})();