angular.module("jeviteca").service("MediaService",[function(){

    this.getWikiLink = function getWikipediaLink(banda) {
        console.log("getWikiLink - MediaService - " + banda);
        var query = encodeURIComponent(banda);
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    };


    this.getYoutubeLink = function getYouTubeLink(banda, track) {
        console.log("getYoutubeLink - MediaService - " + banda + " --> " + track);
        var query = encodeURIComponent((banda + " " + track).toLowerCase());
        return "https://www.youtube.com/results?search_query=" + query;
    };

}]);