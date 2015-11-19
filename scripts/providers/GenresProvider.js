
angular.module("jeviteca").provider("GenresBackend", function(){
    var urlBackendGenres = "";

    return {
        establecerUrlBackend: function(valor){
            urlBackendGenres = valor;
        },

        $get: ["$http", function($http){
            return{
                listarTodosGenres: function(){
                    return $http.get(urlBackendGenres, {
                        cache: "true"
                    });
                }
            };
        }]
    };
});
