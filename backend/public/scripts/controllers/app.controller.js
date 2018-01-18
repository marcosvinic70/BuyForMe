(function () {

	angular
		.module('appModule')
		.controller('AppCtrl', function (storage) {

			var vm = this;

			vm.API_KEY = 'AIzaSyCPJo3FzQtWe989lTzjq83Sb0oCjGgf5Uk';
			storage.setAPIKey(vm.API_KEY);

			vm.BASE_URL = 'https://treinamento-b24ad.firebaseio.com/';
			storage.setBaseUrl(vm.BASE_URL);
		});
})();