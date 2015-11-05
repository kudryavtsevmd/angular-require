define([
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'angular-touch',
    'ng-file-upload'
], function (ng) {
    'use strict';

    return angular.module('app', ["ui.router","ui.bootstrap","ngFileUpload","ngTouch"]);
});
