(function () {

        'use strict';

        angular
            .module('produtoModule')
            .controller('DeletarProdutoController', function (produtoService, $location, sweetAlert) {

                    var vm = this;

                    function deletar(idProduto) {

                        sweetAlert.swal({
                            title: 'Você tem certeza?',
                            text: "Você não poderá reverter a ação!",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sim, remova!',
                            cancelButtonText: 'Não, cancele!',
                        }).then(function () {

                                produtoService.deletar(idProduto).then(function () {

                                    sweetAlert.swal(
                                        'Removido!',
                                        'O produto foi removido do sistema.',
                                        'success'
                                    );

                                    $location.path('/main');

                                }).catch(function (error) {

                                    sweetAlert.swal(
                                        String(error.status),
                                        error.data,
                                        'error'
                                    );

                                });

                            }, function () {

                            });
                        }

                        vm.deletar = deletar;
                    });
            })();