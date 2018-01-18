(function () {

    'use strict';

    angular
        .module('produtoModule')
        .controller('ProdutoGetController', function (produtoService, $routeParams) {

            var vm = this;

            produtoService.getProduto($routeParams.id).then(function (response) {

                vm.produto = response.data;

            });

        });
})();