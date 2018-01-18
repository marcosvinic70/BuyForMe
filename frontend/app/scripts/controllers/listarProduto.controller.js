(function () {

    'use strict';

    angular
        .module('produtoModule')
        .controller('ListarProdutoController', function (produtoService, $location) {

            var vm = this;

            produtoService.getProdutos().then(function (response) {

                vm.produtos = response.data;
                vm.vetorProdutos = _.values(vm.produtos);

            });

            function produtoParaEditar(idProduto) {

                $location.path('/produtos/' + idProduto);
            }

            vm.produtoParaEditar = produtoParaEditar;
        });
})();