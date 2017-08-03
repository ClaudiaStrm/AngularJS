app.controller('ListaInstrutorController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula
});
