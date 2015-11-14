angular.module("jeviteca").controller("BarraNavegacionCtrl", function($scope, $route){

    $scope.rutaAlbumes = function(){
        return $route.current && $route.current.$$route.orignalPath === "/albumes";
    }
    $scope.rutaBandas = function(){
        return $route.current && $route.current.$$route.orignalPath === "/bandas";
    }
    $scope.rutaGeneros = function(){
        return $route.current && $route.current.$$route.orignalPath === "/generos";
    }

});