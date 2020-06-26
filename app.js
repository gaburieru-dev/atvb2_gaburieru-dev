appTrab2 = angular.module('appTrab2', ['ngRoute', 'ngStorage']);

appTrab2.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/template/site.view.html',
            controller: 'SiteController'
        })
        .when('/admin/roles', {
            templateUrl: 'app/template/admin/role.view.html',
            controller: 'RoleController'
        })
        .when('/admin/campeoes', {
            templateUrl: 'app/template/admin/campeao.view.html',
            controller: 'CampeaoController'
        })
        .when('/login', {
            templateUrl: 'app/template/login.view.html',
            controller: 'SignController'
        })
        .when('/signup', {
            templateUrl: 'app/template/signup.view.html',
            controller: 'SignController'
        })
        .otherwise({ redirectTo: '/' });
});

appTrab2.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);
