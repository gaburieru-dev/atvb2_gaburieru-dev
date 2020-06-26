(function( app ){
    'use strict';
    
    app.controller('RoleController', function( $scope, RoleService ){
     //Controle para OrderBy e Filter
     $scope.decrescente = false;
     $scope.selectedColumn = 'id';
 
     //Controle de exibição da tabela/formulario
     $scope.showTable = true;
 
     //Seta a coluna para ser filtrada/ordenada
     $scope.setColumn = function ( columnName ){
         $scope.selectedColumn = columnName;
 
         //determina o ordenação decrescente (false)
         $scope.decrescente = !$scope.decrescente;
     }
 
     //Retornar para o FILTER qual a coluna será utilizada na ordenação/filtro
     $scope.filter = function() {
         var filtro = {};
 
         filtro[$scope.selectedColumn] = $scope.textFilter;
 
         return filtro;
     }
 
     //Prepara a tela para um novo cadastro
     $scope.novo = function() {
         //Representar o role atual
         $scope.role = {
             nome: ''
         }
 
         $scope.showTable = false;
     }
 
     //Cancelar a inclusao/edicao
     $scope.cancelar = function () {
         $scope.showTable = true;
     }
 
     //Salvar a inclusão/edição do role
     $scope.salvar = function() {
         RoleService.salvar($scope.role).then(function( result) {
             $scope.showTable = true;
         });
         
     }
 
     //Editar o role selecionado
     $scope.editar = function(role) {
         $scope.role = role;
         $scope.showTable = false;
     }
 
     //Excluir o role selecionado
     $scope.excluir = function() {
         RoleService.remover($scope.role).then(function(result){
             $scope.showTable = true;
         });
     }
 
     //Carrega uma lista de roles
     RoleService.listar().then(function( result ){
         $scope.roles = result.data;
     });
 
    });
 
 })( appTrab2 );