(function () {

    'use strict';

    angular
        .module('appModule')
        .controller('MainController', function ($location, storage) {

            var vm = this;
            vm.usuarioLogado = storage.getUserData();
            vm.rota = 'login';

            vm.rotas = {
                main: '/',
                login: '/login',
                listar: '/produtos',
                cadastrar: '/cadastroProduto',
                produtos: '/usuario/produtos',
                comentarios: '/comentarios'
            };

            vm.autentica = function autentica(rota) {

                var teste = storage.getUserData();

                if (teste) {
                    vm.rota = rota;
                } else {
                    var resposta = confirm('Para continuar é necessário estar logado.\nDeseja entrar?');
                    if (resposta) {
                        $location.path('/login');
                    } else {
                        vm.rota = 'main';
                    }
                }
            };

            vm.logout = function logout() {

                vm.usuarioLogado = storage.removeUserData();
            };
        });
})();