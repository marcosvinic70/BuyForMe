(function () {

    'use strict';

    angular.module('comentarioModule').factory('comentarioService', function ($http, storage) {

        //var baseUrl = storage.getBaseUrl();

        function getComentarios() {

            var url = 'comentarios' ;

            return $http.get(url);
        }

        function getComentariosProduto(idProduto) {

            var url = 'comentarios/produto/' + idProduto;

            return $http.get(url);
        }

        function postComentario(idProduto, comentario) {

            var usuario = storage.getUserData();

            var url = 'comentario' + '?authenticityToken='+ usuario.idToken;

            var data = {
                "texto": comentario,
                "usuario": {
                    "id": usuario.id
                },
                "produto": {
                    "id": idProduto
                }
            };

            var request = {
                method: 'POST',
                url: url,
                data: data,
                timeout: 4000
            };

            return $http(request);
        }

        return {
            getComentarios: getComentarios,
            getComentariosProduto: getComentariosProduto,
            postComentario: postComentario
        };
    });
})();