appTrab2 = angular.module('appTrab2', ['ngRoute','ngStorage']);

appTrab2.config(function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl: 'app/template/site.view.html',
        controller: 'SiteController'
    })
    .when('/admin/categorias',{
        templateUrl: 'app/template/admin/categoria.view.html',
        controller: 'CategoriaController'
    })
    .when('/admin/produtos',{
        templateUrl: 'app/template/admin/produto.view.html',
        controller: 'ProdutoController'
    })
    .otherwise({ redirectTo: '/' });
});