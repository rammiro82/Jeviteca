
angular.module("jeviteca").directive("elementoBanda", ['MediaService', '$window', function(MediaService, $window){
    return {
        restrict: "AE",
        templateUrl: "views/ElementoBanda.html",
        scope:{
            banda: "="
        },
        link: function(scope)
        {
            scope.getWikipediaLink = function (banda) {
                var url = MediaService.getWikiLink (banda);
                $window.open (url, '_blank');
            };
        }
    };
}]);
