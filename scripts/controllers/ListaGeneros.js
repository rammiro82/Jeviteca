
// Controlador para listar los géneros
angular.module("jeviteca").controller("ListaGenerosCtrl", function($scope, $http, Properties) {

/*
    {
        "id": 1,
        "name": "Sludge metal",
        "albums": [
        {
            "id": 1,
            "title": "Remission",
            "year": 2002,
            "band": {
                "id": 1,
                "name": "Mastodon"
            },
            "image": "1-mastodon-remission.jpg"
        },...
    }
    */

    // Hacemos la petición de géneros, devolviendo el contenido del fichero json.
    $http.get(Properties.backendUrlData + "genres.json").then(

        // La petición al servidor fue correcta.
        function(respuesta) {
            $scope.generos = respuesta.data;
        },

        // Ocurrió algo malo al ir al servidor.
        function(error) {
            // ¿Mostrar mensaje de error al usuario? ¿Mostrar traza en consola?
        }
    );

});