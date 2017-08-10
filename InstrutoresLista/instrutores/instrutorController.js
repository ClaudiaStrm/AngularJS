app.controller('instrutorController', function($scope, $rootScope) {
    $rootScope.instrutores = $scope.instrutores || listaInstrutores();
    $rootScope.aula = $scope.listaAulas || listaAulas();

    $scope.instrutores = $rootScope.instrutores;
    $scope.listaAulas = $rootScope.aula;

    $scope.getID = function() {
        let index = $scope.instrutores.length - 1;
        ultimoID = $scope.instrutores[index].id + 1;
        return ultimoID;
    };


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

    $scope.adicionarInstrutor = function(id){  
        id = id || -1;
        alert(id);
        if (id !== -1){

        return

        } else {
        $scope.formValido = false;      
        novoInstrutor = {
            id: $scope.getID(),
            nome: $scope.instrutorNome,
            sobrenome: $scope.instrutorSobrenome,
            idade: $scope.instrutorIdade,
            email: $scope.instrutorEmail,
            jaDeuAula: $scope.instrutorDeuAula || false,
            aula: $scope.instrutorAula,
            urlFoto: $scope.instrutorUrlFoto || '../imagens/imgPadrao.png',
        };

        $rootScope.instrutores.push(novoInstrutor);
        console.log($rootScope.instrutores)
        }
    }

    $scope.limparForm = function(){
        delete $scope.instrutorID;
        delete $scope.instrutorNome;
        delete $scope.instrutorSobrenome;
        delete $scope.instrutorEmail;
        delete $scope.instrutorIdade;
        delete $scope.instrutorUrlFoto;
        $scope.cadastroForm.$setPristine();
        $scope.cadastroForm.$setUntouched();
    }

    $scope.editar = function(id){
        let editarInstrutor = $scope.instrutores.filter(instrutor => instrutor.id == id);
        $scope.instrutorID = editarInstrutor[0].id;
        $scope.instrutorNome = editarInstrutor[0].nome;
        $scope.instrutorSobrenome = editarInstrutor[0].sobrenome;
        $scope.instrutorEmail = editarInstrutor[0].email;
        $scope.instrutorIdade = editarInstrutor[0].idade;
        $scope.instrutorUrlFoto = editarInstrutor[0].urlFoto;
        alert($scope.instrutorID)
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

