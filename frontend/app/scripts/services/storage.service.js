(function () {

	angular
		.module('appModule')
		.factory('storage', function (localStorageService) {

			function setUserData(data) {

				localStorageService.cookie.set('userData', data, data.expiresIn / 86400); // 86400 = 1 dia em segundos
			}

			function getUserData() {

				return localStorageService.cookie.get('userData');
			}

			function removeUserData() {

				return localStorageService.cookie.remove('userData');
			}

			function setProduto(data) {

				return localStorageService.set('produto', data);
			}

			function getProduto() {

				return localStorageService.get('produto');
			}

			function setAPIKey(data) {

				return localStorageService.set('API_KEY', data);
			}

			function getAPIKey() {

				return localStorageService.get('API_KEY');
			}

			function setBaseUrl(data) {

				return localStorageService.set('BASE_URL', data);
			}

			function getBaseUrl() {

				return localStorageService.get('BASE_URL');
			}

			return {
				setUserData: setUserData,
				getUserData: getUserData,
				removeUserData: removeUserData,
				setProduto: setProduto,
				getProduto: getProduto,
				setAPIKey: setAPIKey,
				getAPIKey: getAPIKey,
				setBaseUrl: setBaseUrl,
				getBaseUrl: getBaseUrl
			};
		});
})();