(function (app) {
    'use strict';

    app.service('RoleService', function ($q, $localStorage) {
        const deferred = $q.defer();

        function loadJSON() {
            deferred.resolve({ data: $localStorage.roles || [] });

            return deferred.promise;
        }

        function save(role) {
            var dados = $localStorage.roles || [];

            if (!role.id) {
                //Pega o ultimo registro
                var ultimo = dados[dados.length - 1];

                //Incrementa o valor de ID o ultimo registro
                role.id = ultimo ? ultimo.id + 1 : 1;

                //Adiciona o role no vetor
                dados.push(role);

                //Devolve o vetor para o localstorage
                $localStorage.roles = dados;
            }

            deferred.resolve(role);

            return deferred.promise;
        }

        function remove( role ) {
            var dados = $localStorage.roles;

            //Procura o index do role que está vindo por parametro
            var index = dados.indexOf( role );

            //Remove a partir do indice uma qtdade de elementos, no caso 1
            dados.splice(index, 1)

            //Atualioza local storage
            $localStorage.roles = dados;

            deferred.resolve({data: dados});
            return deferred.promise;
        }

        return {
            listar: loadJSON,
            salvar: save,
            remover: remove
        }

    });

})(appTrab2);