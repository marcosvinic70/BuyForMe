(function () {

    'use strict';

    angular
        .module('appModule')
        .controller('MainController', function ($location, storage, sweetAlert) {

            var vm = this;
            vm.usuarioLogado = storage.getUserData();
            vm.rota = 'login';

            vm.rotas = {
                main: '/',
                login: '/login',
                listar: '/produtos',
                cadastrar: '/produto/cadastro',
                produtos: '/usuario/produtos',
                comentarios: '/comentarios'
            };

            vm.autentica = function autentica(rota) {

                if (storage.getUserData()) {
                    vm.rota = rota;
                } else {
                    sweetAlert.swal({
                        title: 'Deseja entrar?',
                        text: "Para continuar é necessário estar logado.",
                        type: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Ok',
                    }).then(function () {

                    }, function() {

                    });
                }
            };

            vm.logout = function logout() {

                vm.usuarioLogado = storage.removeUserData();
            };
        });
})();