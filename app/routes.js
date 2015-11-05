define(['app'], function(app) {
    'use strict';
    return  app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$compileProvider','$filterProvider','$provide','datepickerConfig','datepickerPopupConfig','$httpProvider',
        function ($stateProvider, $urlRouterProvider,$controllerProvider, $compileProvider, $filterProvider, $provide, datepickerConfig, datepickerPopupConfig, $httpProvider) {

            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.headers.common.token = $.cookie('token');
            datepickerConfig.startingDay = 1;

            datepickerPopupConfig.currentText = 'Сегодня';
            datepickerPopupConfig.clearText = 'Сбросить';
            datepickerPopupConfig.closeText = 'Закрыть';
            datepickerPopupConfig.datepickerPopup =  'dd-MM-yyyy';

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            $stateProvider
                .state('app', {
                    url: "/",
                    templateUrl: "core/ui/partial/WorkSpace.html",
                    controller: 'WorkSpaceController',
                    resolve: {
                        load: function($q,$http,$state){
                            var deferredRequire = $q.defer(),
                                deferredAuth = $q.defer();
                            require([
                                '../core/ui/controller/WorkSpace'
                            ], function () {
                                deferredRequire.resolve();
                            });
                            deferredAuth.resolve();
                            return $q.all([deferredRequire.promise,deferredAuth.promise]);
                        }
                    }
                })
                .state('app.echokgedit', {
                    url: "echokgedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/echokg/partial/Edit.html",
                            controller:'EchokgEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/echokg/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.echokg', {
                    url: "echokg",
                    views:{
                        'content':{
                            templateUrl: "app/modules/echokg/partial/List.html",
                            controller:'EchokgListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            loadCss('app/modules/echokg/css/List.css');
                            require([
                                './modules/echokg/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.glucoseedit', {
                    url: "glucoseedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/glucose/partial/Edit.html",
                            controller:'GlucoseEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/glucose/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.glucose', {
                    url: "glucose",
                    views:{
                        'content':{
                            templateUrl: "app/modules/glucose/partial/List.html",
                            controller:'GlucoseListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/glucose/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.hssedit', {
                    url: "hssedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/hss/partial/Edit.html",
                            controller:'HssEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/hss/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.hss', {
                    url: "hss",
                    views:{
                        'content':{
                            templateUrl: "app/modules/hss/partial/List.html",
                            controller:'HssListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/hss/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.temperatureedit', {
                    url: "temperatureedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/temperature/partial/Edit.html",
                            controller:'TemperatureEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/temperature/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.temperature', {
                    url: "temperature",
                    views:{
                        'content':{
                            templateUrl: "app/modules/temperature/partial/List.html",
                            controller:'TemperatureListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/temperature/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.weightedit', {
                    url: "weightedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/weight/partial/Edit.html",
                            controller:'WeightEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/weight/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.weight', {
                    url: "weight",
                    views:{
                        'content':{
                            templateUrl: "app/modules/weight/partial/List.html",
                            controller:'WeightListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/weight/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.heightedit', {
                    url: "heightedit/:mode/:id",
                    views:{
                        'content':{
                            templateUrl: "app/modules/height/partial/Edit.html",
                            controller:'HeightEditController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/height/controller/Edit'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('app.height', {
                    url: "height",
                    views:{
                        'content':{
                            templateUrl: "app/modules/height/partial/List.html",
                            controller:'HeightListController'
                        }
                    },
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/height/controller/List'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('usererr', {
                    url: "/usererr",
                    templateUrl: "app/modules/error/partial/UndefinedUser.html",
                    controller:"ErrorUndefineduserController",
                    resolve: {
                        load: function($q){
                            var deferred = $q.defer();
                            require([
                                './modules/error/controller/UndefinedUser'
                            ], function () {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                });

            $urlRouterProvider.otherwise("/");
    }]);
});