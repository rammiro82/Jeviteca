
angular.module("jeviteca").provider("AlbumsBackend", function(){
    var urlBackendAlbum = "";

    return {
        establecerUrlBackend: function(valor){
            urlBackendAlbum = valor;
        },

        $get: ["$http", function($http){
            return{
                listarTodosAlbumes: function(){
                    return $http.get(urlBackendAlbum, {
                        cache: "true"
                    });
                }
            };
        }]
    };
});