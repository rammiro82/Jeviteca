
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaAlbumesCtrl", function($scope, $http, Properties) {



    /*
     {
     "id": 1,
     "title": "Remission",
     "year": 2002,
     "band": {
     "id": 1,
     "name": "Mastodon"
     },
     "genre": {
     "name": "Sludge metal"
     },
     "image": "1-mastodon-remission.jpg",
     "tracklist": [
         "Crusher Destroyer",
         "March of the Fire Ants",
         "Where Strides the Behemoth",
         "Workhorse",
         "Ol'e Nessie",
         "Burning Man",
         "Trainwreck",
         "Trampled Under Hoof",
         "Trilobite",
         "Mother Puncher",
         "Elephant Man"
     ]
     }
     */

    // Hacemos la petición de albumes, devolviendo el contenido del fichero json.
    $http.get(Properties.backendUrlData + "albums.json").then(

        // La petición al servidor fue correcta.
        function(respuesta) {
            $scope.albumes = respuesta.data;
        },

        // Ocurrió algo malo al ir al servidor.
        function(error) {
            // ¿Mostrar mensaje de error al usuario? ¿Mostrar traza en consola?
        }
    );

});