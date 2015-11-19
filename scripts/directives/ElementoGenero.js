
angular.module("jeviteca").directive("elementoGenero", function(){
    return {
        restrict: "AE",
        templateUrl: "views/ElementoGenero.html",
        scope:{
            genero: "="
        }
    };
});