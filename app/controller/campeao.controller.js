(function( app ){
    'use strict';
    
    app.controller('CampeaoController', function( $scope, CampeaoService, RoleService){
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
         //Representar o campeao atual
         $scope.campeao = {
             nome: '',
             nacionalidade: '',
             role: '',
             winrate: 0
         }
 
         $scope.showTable = false;
     }
 
     //Cancelar a inclusao/edicao
     $scope.cancelar = function () {
         $scope.showTable = true;
     }
 
     //Salvar a inclusão/edição do campeao
     $scope.salvar = function() {
         CampeaoService.salvar($scope.campeao).then(function( result) {
             $scope.showTable = true;
         });
         
     }
 
     //Editar o campeao selecionado
     $scope.editar = function(campeao) {
         $scope.campeao = campeao;
         $scope.showTable = false;
     }
 
     //Excluir o campeao selecionado
     $scope.excluir = function() {
         CampeaoService.remover($scope.campeao).then(function(result){
             $scope.showTable = true;
         });
     }
 
     //Carrega uma lista de campeoes
     CampeaoService.listar().then(function( result ){
        $scope.roles = []; 
        $scope.campeaos = result.data;

    //Carrega as roles
        RoleService.listar().then(function(result2){
            $scope.roles = result2.data; 
        });
     });
 
    });
 
 })( appTrab2 );