
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaBandasCtrl", function($scope, $http, Properties) {

/*
    {
        "id": 1,
        "name": "Mastodon",
        "origin": "Atlanta, Georgia, Estados Unidos",
        "members": [
        {
            "name": "Troy Sanders",
            "instruments": [
                "Voz",
                "Bajo"
            ]
        },
        ...
    ],
        "albums": [
        {
            "id": 1,
            "title": "Remission",
            "year": 2002,
            "genre": {
                "id": 1,
                "name": "Sludge metal"
            },
            "image": "1-mastodon-remission.jpg"
        },...
    ]
    }

*/

    // Hacemos la petición de bandas, devolviendo el contenido del fichero json.
    $http.get(Properties.backendUrlData + "bands.json").then(

        // La petición al servidor fue correcta.
        function(respuesta) {
            $scope.bandas = respuesta.data;
        },

        // Ocurrió algo malo al ir al servidor.
        function(error) {
            // ¿Mostrar mensaje de error al usuario? ¿Mostrar traza en consola?
        }
    );

});