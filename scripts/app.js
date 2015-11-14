
angular.module("jeviteca", ["ngRoute", "angular-loading-bar"]);

angular.module("jeviteca").config(function(AlbumsBackendProvider, BandsBackendProvider, GenresBackendProvider, Properties) {
    AlbumsBackendProvider.habilitarPeticionesCors();
    BandsBackendProvider.habilitarPeticionesCors();
    GenresBackendProvider.habilitarPeticionesCors();
    AlbumsBackendProvider.establecerUrlBackend(Properties.backendUrlData);
    BandsBackendProvider.establecerUrlBackend(Properties.backendUrlData);
    GenresBackendProvider.establecerUrlBackend(Properties.backendUrlData);
});

// En fase de config inyectamos $routeProvider para configurar las rutas de la aplicación.
angular.module("jeviteca").config(function($routeProvider) {

    // Definir la ruta de los albumes.
    $routeProvider.when("/albumes", {
        controller: "ListaAlbumesCtrl",
        templateUrl: "views/ListaAlbumes.html",
        resolve: {
            Albumes: ["AlbumsBackend", function(AlbumsBackend){
                return AlbumsBackend.listarTodosAlbumes();
            }]
        }
    });

    // Definir la ruta de las bandas.
    $routeProvider.when("/bandas", {
        controller: "ListaBandasCtrl",
        templateUrl: "views/ListaBandas.html",
        resolve: {
            Bandas: ["BandsBackend", function(BandsBackend){
                return BandsBackend.listarTodasBands();
            }]
        }
    });

    // Definir la ruta de los generos.
    $routeProvider.when("/generos", {
        controller: "ListaGenerosCtrl",
        templateUrl: "views/ListaGeneros.html",
        resolve: {
            Generos: ["GenresBackend", function(GenresBackend){
                return GenresBackend.listarTodosGenres();
            }]
        }
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });

});
