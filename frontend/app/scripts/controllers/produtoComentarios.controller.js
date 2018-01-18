(function () {

    'use strict';

    angular
        .module('comentarioModule')
        .controller('ProdutoComentariosController', function (comentarioService, produtoService, $routeParams, sweetAlert) {

            var vm = this;

            vm.postComentario = function postComentario(comentario) {

                comentarioService.postComentario($routeParams.id, comentario).then(function (response) {

                    vm.response = response;
                    vm.refresh();

                }).catch(function (error) {

                    sweetAlert.swal(
                        String(error.status),
                        error.data,
                        'error'
                    );

                });
            };

            comentarioService.getComentariosProduto($routeParams.id).then(function (response) {

                vm.comentariosProduto = response.data;

            });

            vm.refresh = function refresh() {

                comentarioService.getComentariosProduto($routeParams.id).then(function (response) {

                    vm.comentariosProduto = response.data;

                });
            };
        });
})();