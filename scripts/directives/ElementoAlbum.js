
angular.module("jeviteca").directive("elementoAlbum", function(){
    return {
        restrict: "AE",
        templateUrl: "views/ElementoAlbum.html",
        scope:{
            album: "="
        }
    };
});