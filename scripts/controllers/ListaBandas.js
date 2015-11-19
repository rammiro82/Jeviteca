
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaBandasCtrl", function($scope, Bandas, BandsBackend) {

    var bandas = Bandas.data;

    //$scope.bandas = bandas;

    // Establecemos las propiedades del paginador.
    $scope.paginador = {

        // Cambiamos de página.
        cambioDePagina: function() {

            // Obtenemos el primer y último elemento de la página a mostrar.
            var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
            var ultimo = primero + $scope.paginador.elementosPorPagina;

            // Establecemos en la vista la página seleccionada.
            $scope.bandas = bandas.slice(primero, ultimo);
        },

        // Página actual.
        paginaActual: 1,

        // Total de elementos.
        totalElementos: bandas.length,

        // Tamaño de página.
        elementosPorPagina: 5
    };


    // Forzamos el cambio de página para que traiga la primera al entrar a la vista.
    $scope.paginador.cambioDePagina();
});


/*
 {
 "id": 1,
 "name": "Mastodon",
 "origin": "Atlanta, Georgia, Estados Unidos",
 "members": [
 {
 "name": "Troy Sanders",
 "instruments": [
 "Voz",
 "Bajo"
 ]
 },
 ...
 ],
 "albums": [
 {
 "id": 1,
 "title": "Remission",
 "year": 2002,
 "genre": {
 "id": 1,
 "name": "Sludge metal"
 },
 "image": "1-mastodon-remission.jpg"
 },...
 ]
 }

 */