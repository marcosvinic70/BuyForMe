(function () {

        'use strict';

        angular.module('ui.bootstrap')
            .factory('alertService', function (/*$http, storage*/) {

            var alerts = {

                success: {

                    login: {
                        message: 'Login realizado com sucesso!'
                    },
                    cadastroProduto: {
                        message: 'Produto cadastrado com sucesso!'
                    },
                    editProduto: {
                        message: 'Produto editado com sucesso!'
                    },
                    deleteProduto: {
                        message: 'Produto excluído com sucesso!'
                    },
                    postComentario: {
                        message: 'Comentário enviado com sucesso!'
                    }
                },

                danger: {
                    message: 'message',
                }
            };

            console.log(alerts);

            function addAlert() {

            }

            function getAlert() {

            }


            return {
                addAlert: addAlert,
                getAlert: getAlert
            };

        });

    })();