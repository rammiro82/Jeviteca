angular.module("jeviteca").controller("DetalleAlbumCtrl", function($scope, item, Utilidades){
    $scope.item = item;

    $scope.getWiki = function(cancion){
        return Utilidades.getYoutubeLink(item.band.name, cancion);
    }
});