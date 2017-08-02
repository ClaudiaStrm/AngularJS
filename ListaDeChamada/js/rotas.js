app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: 'templates/lista-presenca.html'
    })
    .when('/presentes', {
      templateUrl: 'templates/presentes.html'
    })
    .when('/ausentes', {
      templateUrl: 'templates/ausentes.html'
    })
    .when('/mais-faltas', {
      templateUrl: 'templates/mais-faltas.html'
    })
    .otherwise({
      redirectTo: "/lista-presenca"
    });
});