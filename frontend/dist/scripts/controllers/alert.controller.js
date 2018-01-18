(function () {
	angular.module('ui.bootstrap')
		.controller('AlertController', function ($scope) {

			var vm = this;

			vm.alert = {};
			vm.alert.type = 'danger';
			vm.alert.message = "This is a danger alert";

			vm.show = true;
			vm.closeMe = function() {
				vm.show = false;
			};

			vm.showAlert = true;
			vm.closeMeByTime = function() {
				vm.showAlert = false;
			};

			$scope.alerts = [{
				type: 'success',
				msg: 'Log in realizado com sucesso!'
			}];

			$scope.addAlert = function () {
				$scope.alerts.push({
					msg: 'Another alert!',
					type: 'warning'
				});
			};

			$scope.closeAlert = function (index) {
				$scope.alerts.splice(index, 1);
			};

		});
})();