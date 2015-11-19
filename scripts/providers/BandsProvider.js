
angular.module("jeviteca").provider("BandsBackend", function(){
    var urlBackendBands = "";

    return {
        establecerUrlBackend: function(valor){
            urlBackendBands = valor;
        },

        $get: ["$http", function($http){
            return{
                listarTodasBands: function(){
                    return $http.get(urlBackendBands, {
                        cache: "true"
                    });
                }
            };
        }]
    };
});