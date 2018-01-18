(function () {

    'use strict';

    angular.module('comentarioModule')
        .controller('ComentariosController', function (comentarioService) {

            var vm = this;

            comentarioService.getComentarios().then(function (response) {

                vm.comentarios = response.data;

            });
        });
})();