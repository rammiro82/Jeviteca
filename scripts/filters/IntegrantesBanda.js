
angular.module("jeviteca").filter("BandaUppercase", function($filter) {
    return function(item) {
        return $filter("uppercase")(item);
    };
});
