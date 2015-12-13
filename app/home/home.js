(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope','$location','$rootScope', '$routeParams', '$route'];
		function HomeController($scope, $location, $rootScope, $routeParams, $route){
			var vm = this;
			vm.$location = $location;
			
		};

})();