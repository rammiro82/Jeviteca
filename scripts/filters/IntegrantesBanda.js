
// Filtro que escribe una firma dados un usuario y una fecha.
angular.module("jeviteca").filter("IntegrantesBanda", function($filter) {

    // Los filtros siempre retornes funciones.
    // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
    return function(integrante) {

        return $filter("uppercase")(integrante);
    };
});

// Filtro que escribe una firma dados un usuario y una fecha.
angular.module("jeviteca").filter("BandaUppercase", function($filter) {

    // Los filtros siempre retornes funciones.
    // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
    return function(integrante) {

        return $filter("uppercase")(integrante);
    };
});