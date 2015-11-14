
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaAlbumesCtrl", function($scope, Albumes, AlbumsBackend) {

    $scope.albumes = Albumes.data;


    $scope.meGusta = function(album){
        AlbumsBackend.favorito(album.id).then(
            function(respuesta){
                //albumes.likes++;
            }
        );
    };
});








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