app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: '/instrutores/listaInstrutor.html'
    })
    .when('/instrutores', {
        templateUrl: '/instrutores/listaInstrutor.html'
    })
    .when('/cadastro', {
        templateUrl: '/instrutores/cadastroInstrutor.html'
    })
    .otherwise({
      redirectTo: '/instrutores'
    })
  });