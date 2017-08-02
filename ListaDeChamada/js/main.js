var app = angular.module('app', ['ngRoute']);

function listaChamada() {
    chamada = [
      { id: 1, nome: "Aline C. S.", presenca: false, qtdeFaltas: 0,  }, 
      { id: 2, nome: "Aline S. A. R.", presenca: false, qtdeFaltas: 0,},
      { id: 3, nome: "Ana Claudia M. C.", presenca: false, qtdeFaltas: 0,},
      { id: 4, nome: "Ana Margareth G. S.", presenca: false, qtdeFaltas: 0,},
      { id: 5, nome: "Ana Priscila N. C.", presenca: false, qtdeFaltas: 0,},
   /*   { id: 6, nome: "Ana Valéria G. L.", presenca: false, qtdeFaltas: 0,},
      { id: 7, nome: "Andréa S.", presenca: false, qtdeFaltas: 0,},
      { id: 8, nome: "Christiano H. P.", presenca: false, qtdeFaltas: 0,},
      { id: 9, nome: "Cláudia S. M.", presenca: false, qtdeFaltas: 0,},
      { id: 10, nome: "Fernanda C. M.", presenca: false, qtdeFaltas: 0,},
      { id: 11, nome: "Filipe C. P.", presenca: false, qtdeFaltas: 0,},
      { id: 12, nome: "Jonatha A.", presenca: false, qtdeFaltas: 0,},
      { id: 13, nome: "Karen P. A.", presenca: false, qtdeFaltas: 0,},
      { id: 14, nome: "Larissa C.", presenca: false, qtdeFaltas: 0,},
      { id: 15, nome: "Laura Clara G.", presenca: false, qtdeFaltas: 0,},
      { id: 16, nome: "Liana S. D.", presenca: false, qtdeFaltas: 0,},
      { id: 17, nome: "Lucas C. G.", presenca: false, qtdeFaltas: 0,},
      { id: 18, nome: "Lucas B. D.", presenca: false, qtdeFaltas: 0,},
      { id: 19, nome: "Luciano Luís A.", presenca: false, qtdeFaltas: 0,},
      { id: 20, nome: "Luiz M. S. N.", presenca: false, qtdeFaltas: 0,},
      { id: 21, nome: "Maira T. C.", presenca: false, qtdeFaltas: 0,},
      { id: 22, nome: "Mariana M. S.", presenca: false, qtdeFaltas: 0,},
      { id: 23, nome: "Poliana O. G.", presenca: false, qtdeFaltas: 0,},
      { id: 24, nome: "Rodrigo P. C.", presenca: false, qtdeFaltas: 0,},
      { id: 25, nome: "Samara M. P.", presenca: false, qtdeFaltas: 0,},
      { id: 26, nome: "Simone B. S.", presenca: false, qtdeFaltas: 0,},
      { id: 27, nome: "Stéphanie N. P. S.", presenca: false, qtdeFaltas: 0,},
      { id: 28, nome: "Teresa A. A. B.", presenca: false, qtdeFaltas: 0,},
      { id: 29, nome: "Thais C. S.", presenca: false, qtdeFaltas: 0,},
      { id: 30, nome: "Vera Lucia S.", presenca: false, qtdeFaltas: 0,},*/
    ]
    return chamada;
}

app.controller('PresencaController', function ($scope, $rootScope) {

  $rootScope.chamada = $rootScope.chamada || listaChamada();    
  $scope.chamada = $rootScope.chamada; 

  $scope.marcarPresenca = function(idAluno){ 
    $rootScope.chamada.forEach(function(aluno){
      if(aluno.id == idAluno){
        aluno.presenca == false ? aluno.presenca = true : aluno.presenca = false
      }
    });     
  };    
});

app.controller('AusentesController', function ($scope, $rootScope) {
  $rootScope.chamada = $rootScope.chamada || listaChamada();
  $scope.novaAula = function(){
    $rootScope.chamada.forEach(function(aluno){
      if(aluno.presenca == false){
        aluno.qtdeFaltas++;
      }
    aluno.presenca = false;
    });
    return $rootScope.chamada;             
  }; 

  $rootScope.qtdeAulas = $rootScope.qtdeAulas || 0;
  $scope.qtdeAulas = function(){
    return $rootScope.qtdeAulas++;
  }
});

app.controller('FaltantesController', function ($scope) {
  $scope.mensagem = "Não há aulas suficientes para exibir essas informações."
});
