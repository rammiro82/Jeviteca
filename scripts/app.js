
angular.module("jeviteca", ["ngRoute"]);

angular.module("jeviteca").config(function($httpProvider) {

    // Configuramos las cabeceras por defecto para evitar problemas de CORS.
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});

// En fase de config inyectamos $routeProvider para configurar las rutas de la aplicación.
angular.module("jeviteca").config(function($routeProvider) {

    // Definir la ruta de los albumes.
    $routeProvider.when("/albumes", {
        controller: "ListaAlbumesCtrl",
        templateUrl: "views/ListaAlbumes.html"
    });

    // Definir la ruta de las bandas.
    $routeProvider.when("/bandas", {
        controller: "ListaBandasCtrl",
        templateUrl: "views/ListaBandas.html"
    });

    // Definir la ruta de los generos.
    $routeProvider.when("/generos", {
        controller: "ListaGenerosCtrl",
        templateUrl: "views/ListaGeneros.html"
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });

});