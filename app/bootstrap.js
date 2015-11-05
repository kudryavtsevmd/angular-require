var urlParams ="?id=" + (new Date()).getTime();
loadCss("bower_components/bootstrap/dist/css/bootstrap.min.css" + urlParams);
loadCss("bower_components/bootstrap/dist/css/bootstrap-theme.min.css" + urlParams);
loadCss("resources/css/main.css" + urlParams);

define([
    'require',
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'jquery-cookie',
    'CONST',
    'app',
    'routes'
], function ( require, ng) {
    'use strict';

    $('#preloader').fadeOut(1500,function(){
        $('#content').fadeIn(1500);
    });
    //require(['domReady!'], function (document) {
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });


    //});

});