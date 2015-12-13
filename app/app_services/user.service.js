(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('UserService', UserService);

	UserService.$inject = ['$http'];
	function UserService($http) {
		var service = {};

		service.Create = Create;
		return service;

		function Create(user, callback) {
			$http.post('http://gutcheckins.herokuapp.com/users', user)
				.then(function(response){
					callback(response);
				});
		}

	}

})();