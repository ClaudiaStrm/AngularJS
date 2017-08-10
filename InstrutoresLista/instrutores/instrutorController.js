app.controller('instrutorController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula;



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
            id: 0,
            nome: $scope.instrutor.nome,
            sobrenome: $scope.instrutor.sobrenome,
            idade: $scope.instrutor.idade,
            email: $scope.instrutor.email,
            jaDeuAula: $scope.instrutor.jaDeuAula || false,
            aula: $scope.instrutor.aula,
            urlFoto: $scope.instrutor.urlFoto || '../imagens/imgPadrao.png',
        }; 
        $rootScope.instrutores.push(novoInstrutor);
        console.log($rootScope.instrutores)
    }

    $scope.limparForm = function(){
        delete $scope.instrutor;
        $scope.cadastroForm.$setPristine();
        $scope.cadastroForm.$setUntouched();
    }

    $scope.editar = function(id){
        alert("ID:" + id)
    }

    $scope.excluir = function(id){
        let sim = confirm("Você tem certeza que deseja excluir esse instrutor?");
        if (!sim) return;

        let contador = 0;
        $scope.instrutores.forEach(function(instrutor){
            if (instrutor.id == id){
                 $scope.instrutores.splice(contador, 1);
             };
            contador++;
        });
    };

        
  //       $scope.novaAula = function(){
  //   chamada.forEach(function(aluno){
  //     if(aluno.presenca == false){
  //       aluno.qtdeFaltas++;
  //     }
  //   aluno.presenca = false;
  //   });
  //   return $rootScope.chamada;             
  // }; 
     
});

    

        // $scope.instrutores.forEach(function(instrutor){
        //     contador++;
        //     if (instrutor.id == id){
        //         instrutores.remove(contador, 1);
        //     };
        // };

