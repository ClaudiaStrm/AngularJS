app.controller('aulaController', function($scope){
	$scope.aula = {
		id: '',
		nome: '',
		emAndamento: false
	}

	$scope.listaAulas = $scope.listaAulas || listaAulas();


	console.log($scope.aulas)
})