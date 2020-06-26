(function (app) {
    'use strict';

    app.service('CampeaoService', function ($q, $localStorage) {
        const deferred = $q.defer();

        function loadJSON() {
            deferred.resolve({ data: $localStorage.campeaos || [] });

            return deferred.promise;
        }

        function save(campeao) {
            var dados = $localStorage.campeaos || [];

            if (!campeao.id) {
                //Pega o ultimo registro
                var ultimo = dados[dados.length - 1];

                //Incrementa o valor de ID o ultimo registro
                campeao.id = ultimo ? ultimo.id + 1 : 1;

                //Adiciona o campeao no vetor
                dados.push(campeao);

                //Devolve o vetor para o localstorage
                $localStorage.campeaos = dados;
            }

            deferred.resolve(campeao);

            return deferred.promise;
        }

        function remove( campeao ) {
            var dados = $localStorage.campeaos;

            //Procura o index do campeao que está vindo por parametro
            var index = dados.indexOf( campeao );

            //Remove a partir do indice uma qtdade de elementos, no caso 1
            dados.splice(index, 1)

            //Atualioza local storage
            $localStorage.campeaos = dados;

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