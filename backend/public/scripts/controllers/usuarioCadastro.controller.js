(function () {

    'use strict';

    angular
        .module('usuarioModule')
        .controller('UsuarioCadastroController', function (usuarioService, $location, sweetAlert) {

            var vm = this;

            function cadastro(user) {

                usuarioService.cadastro(user).then(function (response) {

                    vm.UsuarioCadastrado = response;

                    sweetAlert.swal(
                        'Bom trabalho!',
                        'Usuário cadastrado com sucesso!',
                        'success'
                    );

                    $location.path("/login");

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