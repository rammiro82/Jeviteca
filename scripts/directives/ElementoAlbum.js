
angular.module("jeviteca").directive("elementoAlbum",  ["FavoriteService", function(FavoriteService) {
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
            scope.isFavorite = FavoriteService.isFavorite(scope);

            scope.markAs = function(type) {
                switch(type) {
                    case true :
                        FavoriteService.setFav(scope);
                        break;
                    case false :
                        FavoriteService.deleteFav(scope);
                        break;

                }
                scope.isFavorite = type;
            }

        }
    };
}]);