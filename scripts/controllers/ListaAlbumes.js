
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaAlbumesCtrl", ['$scope', 'Albumes', 'MediaService', '$window', function($scope, Albumes, MediaService, $window) {

    $scope.albumes = Albumes.data;

    $scope.getYoutubeLink = function (band, track) {
        console.log("getWikipediaLink - ListaBandasCtrl");
        var url = MediaService.getYoutubeLink (band, track);
        $window.open ( url, '_blank' );
    };
}]);
