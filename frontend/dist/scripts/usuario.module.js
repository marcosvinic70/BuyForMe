(function () {

    angular.module('usuarioModule', ['LocalStorageModule'])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/login', {
                    templateUrl: 'sections/login.html',
                    controller: 'UsuarioLoginController',
                    controllerAs: 'UsuarioLogin'
                })
                .when('/cadastro', {
                    templateUrl: 'sections/cadastro.html',
                    controller: 'UsuarioCadastroController',
                    controllerAs: 'UsuarioCadastro'
                })
                .when('/usuario/produtos', {
                    templateUrl: 'sections/usuario-produtos.html',
                    controller: 'UsuarioProdutosController',
                    controllerAs: 'UsuarioProdutos'
                });
        });
})();