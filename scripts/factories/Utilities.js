angular.module("jeviteca").factory("Utilidades", function(){

    var utils = {};

    utils.getWikiLink = function getWikipediaLink(bandName) {
        var query = encodeURIComponent(bandName);
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    }

    utils.getYoutubeLink = function getYouTubeLink(bandName, trackName) {
        var query = encodeURIComponent((bandName + " " + trackName).toLowerCase());
        return "https://www.youtube.com/results?search_query=" + query;
    }

    return utils;

});/**
 * Created by ramiro on 19/11/15.
 */
