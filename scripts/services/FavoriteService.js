angular.module("jeviteca").service("FavoriteService",[function(){

    var claveAppAlbum = "jeviteca_album_fav_";

    //Favorites functions
    this.isLocalStorageEnable = function() {

        if(typeof (Storage) !== "undefined"){
            return true;
        }
        else{
            return false;
        }
    };

    this.isFavorite = function(scope){
        var fav = localStorage.getItem(claveAppAlbum + scope.album.id);
        return fav === "1";
    };


    this.setFav = function(scope){

        localStorage.setItem(claveAppAlbum + scope.album.id,"1");
    };


    this.deleteFav = function(scope){
        localStorage.removeItem(claveAppAlbum + scope.album.id);
    };

}]);