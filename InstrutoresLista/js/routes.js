app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: '/instrutores/instrutor.html'
    })
    .when('/instrutores', {
        templateUrl: '/instrutores/instrutor.html'
    })
    .otherwise({
      redirectTo: '/instrutores'
    })
  });