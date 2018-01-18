(function () {

    'use strict';

    angular
        .module('usuarioModule')
        .controller('UsuarioCadastroController', function (usuarioService, $location) {

            var vm = this;

            function cadastro(user) {

                usuarioService.cadastro(user).then(function (response) {

                    vm.UsuarioCadastrado = response;
                    alert("Usuário cadastrado com sucesso");
                    $location.path("/");

                }).catch(function (error) {

                    alert(error.data.error.message);

                });
            }

            vm.cadastro = cadastro;

        });
})();