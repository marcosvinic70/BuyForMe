(function () {

    'use strict';

    angular
        .module('comentarioModule')
        .controller('ProdutoComentariosController', function (comentarioService, $routeParams) {

            var vm = this;

            comentarioService.getComentariosProduto($routeParams.id).then(function (response) {

                vm.comentariosProduto = response.data;

            });

            vm.postComentario = function postComentario(comentario) {

                comentarioService.postComentario($routeParams.id, comentario).then(function (response) {

                    vm.response = response;
                    vm.refresh();

                });
            };

            vm.refresh = function refresh() {

                comentarioService.getComentariosProduto($routeParams.id).then(function (response) {

                    vm.comentariosProduto = response.data;

                });
            };
        });
})();