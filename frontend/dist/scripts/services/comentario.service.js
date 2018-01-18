(function () {

    'use strict';

    angular.module('comentarioModule').factory('comentarioService', function ($http, storage) {

        var baseUrl = storage.getBaseUrl();

        function getComentarios() {

            var url = baseUrl + 'comentarios.json?auth=' + storage.getUserData().idToken;

            return $http.get(url);
        }

        function getComentariosProduto(idProduto) {

            var url = baseUrl + 'comentarios.json?orderBy="produtoId"&equalTo="' + idProduto + '"';
            return $http.get(url);
        }

        function postComentario(idProduto, comentario) {

            var url = baseUrl + 'comentarios.json?auth=' + storage.getUserData().idToken;

            var data = {
                "texto": comentario,
                "autorId": storage.getUserData().localId,
                "produtoId": idProduto
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