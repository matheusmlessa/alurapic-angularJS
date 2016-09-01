angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.foto = [];

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(error);
	});
	
	/*
	var promise = $http.get('v1/fotos');
	promise.then(function(retorno) { 
		$scope.fotos = retorno.data;
	}).catch(function(error) {
		console.log(error)
	});
	*/

});