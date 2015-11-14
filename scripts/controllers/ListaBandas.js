
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaBandasCtrl", function($scope, Bandas, BandsBackend) {

    $scope.bandas = Bandas.data;


    $scope.meGusta = function(band){
        BandsBackend.favorito(band.id).then(
            function(respuesta){
                //albumes.likes++;
            }
        );
    };
});


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