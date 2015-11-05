//динамическая загрузка стилей
var loadCss = function(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
};

require.config({

    waitSeconds: 0,// отключаем таймаут загрузки
    urlArgs: "id=" + (new Date()).getTime(),
    //  псевдонимы и пути используемых библиотек и плагинов
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'jquery-cookie': '../bower_components/jquery-cookie/jquery.cookie',
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-rus': '../bower_components/angular-i18n/angular-locale_ru-ru',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-touch': '../bower_components/angular-touch/angular-touch.min',
        'ng-file-upload-shim': '../bower_components/ng-file-upload/ng-file-upload-shim.min',
        'ng-file-upload': '../bower_components/ng-file-upload/ng-file-upload.min',
        'bootstrapjs': '../bower_components/bootstrap/dist/js/bootstrap',
        'moment': '../bower_components/moment/min/moment-with-locales.min',
        'CONST': 'config/Constant'

        //'app':'../app/app'
    },

    // angular не поддерживает AMD из коробки, поэтому экспортируем перменную angular в глобальную область
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router':{
            deps: ['angular']
        },
        'angular-rus':{
            deps: ['angular']
        },
        'angular-bootstrap':{
            deps: ['angular','angular-rus']
        },
        'angular-touch':{
            deps: ['angular']
        },
        'ng-file-upload-shim':{
            deps: ['angular']
        },
        'ng-file-upload':{
            deps: ['ng-file-upload-shim']
        },
        'jquery':{
            exports: ['$']
        },
        'jquery-cookie':{
            deps: ['jquery'],
            exports: ['$']
        },
        'bootstrapjs':{
            deps: ['jquery']
        },
        'moment': {
            exports: 'moment'
        },
        'CONST': {
            exports: 'CONST'
        }
    },

    // запустить приложение
    deps: ['./bootstrap']

});
