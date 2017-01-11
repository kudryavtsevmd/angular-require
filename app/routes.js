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
