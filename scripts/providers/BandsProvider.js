
angular.module("jeviteca").provider("BandsBackend", function($httpProvider){
    var urlBackend= "";

    return {

        habilitarPeticionesCors: function(){
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        },

        establecerUrlBackend: function(valor){
            urlBackend = valor;
        },

        $get: ["$http", function($http){
            return{
                listarTodasBands: function(){
                    return $http.get(urlBackend + "bands.json", {
                        cache: "true"
                    });
                },

                favorito: function(idBand){
                    return $http.post(urlBackend + "/posts/" + idBand + "/like");
                }
            };
        }]
    };
});