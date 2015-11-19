angular.module("jeviteca").service("FavoriteService",[function(){


    //Favorites functions
    this.isLocalStorageEnable = (typeof (Storage) !== "undefined");

    this.isFavorite = function(scope, clave){
        var fav = localStorage.getItem(clave + scope.album.id);
        return fav === "1";
    };


    this.setFav = function(scope, clave){

        localStorage.setItem(clave + scope.album.id,"1");
    };


    this.deleteFav = function(scope, clave){
        localStorage.removeItem(clave + scope.album.id);
    };

}]);