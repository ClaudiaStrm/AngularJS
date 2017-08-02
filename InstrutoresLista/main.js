var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: 'instrutores.html'
    })
    .when('/instrutores', {
        templateUrl: 'instrutores.html'
    })
    .when('/cadastro', {
        templateUrl: 'cadastro.html'
    })
    .otherwise({
      redirectTo: '/instrutores'
    })
  });

function listaAulas(){
    aulas = [
        'OO',
        'HTML e CSS',
        'Javascript',
        'AngularJS',
        'Banco de Dados I'
    ];
    return aulas
}
function listaInstrutores(){
    instrutores = [
      { 
        nome: 'Bernardo',
        sobrenome: 'Rezende',
        idade: 30,
        email: 'bernardo@cwi.com.br',
        jaDeuAula: true,
        aula: "OO"
      }
    ];
    return instrutores
}

app.controller('InstrutoresController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula

});

app.controller('CadastroController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula

    $scope.submitForm = function(isValid) {
    };

    $scope.verificarIdade = function(idade){
        if (idade >= 15 && idade <= 98){
            $scope.cadastroForm.idade.$setValidity('valido',true);
        } else {
            $scope.cadastroForm.idade.$setValidity('valido',false);
        }   
    };


    $scope.verificarDuplicidade = function (email) {
        for (i in $scope.instrutores) {
            if ($scope.instrutores[i].email == email) {
                $scope.cadastroForm.email.$setValidity('duplicado',false);
            } else {
                $scope.cadastroForm.email.$setValidity('duplicado',true);
            }
        }    
    };

    $scope.adicionarInstrutor = function(){        
        novoInstrutor = {
            nome: $scope.instrutor.nome,
            sobrenome: $scope.instrutor.sobrenome,
            idade: $scope.instrutor.idade,
            email: $scope.instrutor.email,
            jaDeuAula: $scope.instrutor.jaDeuAula || false,
            aula: $scope.instrutor.aula
        }; 
        $rootScope.instrutores.push(novoInstrutor);
    }

    $scope.limparForm = function(){

        $scope.instrutor = {};

        // definindo objetos vazios de cadastroForm
        $scope.cadastroForm.nome = {};
        $scope.cadastroForm.sobrenome = {};
        $scope.cadastroForm.idade = {};
        $scope.cadastroForm.email = {};
    }
});