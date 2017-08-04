app.controller('CadastroInstrutorController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula;

    $scope.cadastroForm = {};
    //$scope.instrutor.nome = {};
    // $scope.instrutor.sobrenome = '';
    // $scope.instrutor.idade = '';
    // $scope.instrutor.email = '';

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
        $scope.formValido = false;      
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
        $scope.cadastroForm = {};
        $scope.instrutor.nome = '';
        $scope.instrutor.sobrenome = '';
        $scope.instrutor.email = '';
        $scope.instrutor.idade = '';
        $scope.cadastroForm.$setUntouched();
    }
});