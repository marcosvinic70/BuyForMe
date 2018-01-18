(function () {

    'use strict';

    angular
        .module('produtoModule')
        .controller('DeletarProdutoController', function (produtoService, $location) {

            var vm = this;

            function deletar(idProduto) {

                var resposta = confirm("Tem certeza que deseja apagar este produto?");
                if (resposta) {
                    produtoService.deletar(idProduto).then(function () {

                        alert("Produto excluído com sucesso!");
                        $location.path('/main');

                    }).catch(function (error) {

                        alert(error.data.error.message);

                    });
                }
            }

            vm.deletar = deletar;
        });
})();