angular
  .module('innovaID', [
    'lbServices',
    'ui.router',
	'angularFileUpload'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login',
        controller: 'loginCtrl'
      })

	  .state('home', {
        url: '/home',
        templateUrl: 'partials/home',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('login');
  }]);



