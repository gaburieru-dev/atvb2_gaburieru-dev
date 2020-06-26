(function( app ) {
    app.controller('SiteController', function( $scope, RoleService, CampeaoService){
        //carrega as roles do site
        RoleService.listar().then(function(result){
            $scope.campeaos = [];
            $scope.roles = result.data;

            //Carrega Campeões
            CampeaoService.listar().then(function(result2){
                $scope.campeaos = result2.data;
            });
        });
    });
})( appTrab2 );