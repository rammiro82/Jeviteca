
angular.module("jeviteca").directive("elementoAlbum",  ["FavoriteService", "MediaService", '$window', function(FavoriteService, MediaService, $window) {
    var claveAppAlbum = "jeviteca_album_fav_";

    return {
        restrict: "AE",
        templateUrl: "views/ElementoAlbum.html",
        scope:{
            album: "=",
            id: "=albumId"
        },
        link: function(scope)
        {
            scope.isLocalStorageEnable = FavoriteService.isLocalStorageEnable;
            scope.isFavorite = FavoriteService.isFavorite(scope, claveAppAlbum);

            scope.markAs = function(type) {
                switch(type) {
                    case true :
                        FavoriteService.setFav(scope, claveAppAlbum);
                        break;
                    case false :
                        FavoriteService.deleteFav(scope, claveAppAlbum);
                        break;

                }
                scope.isFavorite = type;
            };

            scope.getWikipediaLink = function (banda) {
                var url = MediaService.getWikiLink (banda);
                $window.open (url, '_blank');
            };

            scope.getYoutubeLink = function (banda, track) {
                var url = MediaService.getYoutubeLink (banda, track);
                $window.open (url, '_blank');
            };
        }
    };
}]);
