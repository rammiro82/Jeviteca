
angular.module("jeviteca").directive("elementoBanda", function(){
    return {
        restrict: "AE",
        templateUrl: "views/ElementoBanda.html",
        scope:{
            banda: "="
        }
    };
});