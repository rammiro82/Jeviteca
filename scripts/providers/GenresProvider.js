
angular.module("jeviteca").provider("GenresBackend", function($httpProvider){
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
                listarTodosGenres: function(){
                    return $http.get(urlBackend + "genres.json", {
                        cache: "true"
                    });
                },

                favorito: function(idGenre){
                    return $http.post(urlBackend + "/posts/" + idGenre + "/like");
                }
            };
        }]
    };
});
