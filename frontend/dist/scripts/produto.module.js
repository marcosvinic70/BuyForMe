(function () {
    angular.module('produtoModule', [])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/produtos', {
                    templateUrl: 'sections/produto-lista.html',
                    controller: 'ListarProdutoController',
                    controllerAs: 'ListarProduto'
                })
                .when('/cadastroProduto', {
                    templateUrl: 'sections/cadastrar-produto.html',
                    controller: 'CadastrarProdutoController',
                    controllerAs: 'CadastrarProduto'
                })
                .when('/produtos/:id', {
                    templateUrl: 'sections/editar-produto.html',
                    controller: 'EditarProdutoController',
                    controllerAs: 'EditarProduto'
                });
        });
})();