senkonekta.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/fonts', {
        templateUrl: './views/fonts.html',
        controller: 'ApiCtrl'
      })
      .when('/', {
        templateUrl: './views/home.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);