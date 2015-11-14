
angular.module("jeviteca").provider("AlbumsBackend", function($httpProvider){
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
                listarTodosAlbumes: function(){
                    return $http.get(urlBackend + "albums.json", {
                        cache: "true"
                    });
                },

                favorito: function(idAlbum){
                    return $http.post(urlBackend + "/posts/" + idAlbum + "/like");
                }
            };
        }]
    };
});