
// Controlador para listar los géneros
angular.module("jeviteca").controller("ListaGenerosCtrl", function($scope, Generos, GenresBackend) {

    $scope.generos = Generos.data;

});


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
