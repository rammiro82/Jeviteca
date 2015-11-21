
// Controlador para listar los albumes
angular.module("jeviteca").controller("ListaBandasCtrl", ['$scope', 'Bandas', 'MediaService', '$window', function($scope, Bandas, MediaService, $window) {

    var bandas = Bandas.data;

    $scope.getWikipediaLink = function (banda) {
        console.log("getWikipediaLink - ListaBandasCtrl");
        var url = MediaService.getWikipediaLink (banda);
        $window.open (url, '_blank');
    };

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
}]);
