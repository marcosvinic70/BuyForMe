(function () {

    'use strict';

    angular.module('usuarioModule')
        .controller('UsuarioProdutosController', function (produtoService) {

            var vm = this;

            produtoService.getProdutosByUser().then(function (response) {

                vm.produtos = response.data;

            });
        });
})();