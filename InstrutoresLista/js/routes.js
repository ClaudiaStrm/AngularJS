app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: '/instrutores/instrutor.html'
    })
    .when('/instrutores', {
        templateUrl: '/instrutores/instrutor.html'
    })
    .when('/aulas', {
        templateUrl: '/aulas/aula.html'
    })
    .otherwise({
      redirectTo: '/instrutores'
    })
  });