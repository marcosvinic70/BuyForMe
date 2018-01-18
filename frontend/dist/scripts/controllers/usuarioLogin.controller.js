(function () {

	'use strict';

	angular
		.module('usuarioModule')
		.controller('UsuarioLoginController', function (usuarioService, $location, storage) {

			var vm = this;

			vm.login = function login(user) {

				usuarioService.login(user).then(function (response) {

					storage.setUserData(response.data);
					//alert('Login realizado com sucesso');
					//SweetAlert.swal("Good job!", "You clicked the button!", "success");
					$location.path('/main');

				}).catch(function (error) {

					alert(error.data.error.message);

				});
			};
		});

})();