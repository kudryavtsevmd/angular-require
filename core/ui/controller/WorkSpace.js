define(['app', '../../directive/MouseDown'], function(app) {
    'use strict';

    return app.register.controller('WorkSpaceController',[ '$scope', '$state', '$location','$http',
        function($scope, $state, $location, $http){
            $scope.header = 'Меню';
            $scope.alerts = [];
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };
            $scope.menu = {
                list:[
                    {
                        sref:'app.menu1',
                        addSref:"app.menu1edit({mode:'create',id: ''})",
                        name:'Меню1'
                    }
                ]
            };

            $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
                 if (toState.name == 'app'){
                    $scope.loading = false;
                 }
             });

            $scope.getHref = function(){
                switch ($state.current.name){
                    default:
                            return $state.href('app');
                        break;
                }
            };
            $scope.isRoot = function(){
                return $state.current.name == 'app' ? true : false ;
            };
            $scope.click = function(){
                $scope.loading = true;
            };
            $scope.logout = function(){
                $scope.loading = true;
                /*$http({
                    method: 'GET',
                    url  : "/?logout=exit&token=" + $.cookie('token')
                }).success(function (result) {
                    $.removeCookie('token',{ domain: location.host, path: '/' });
                    window.location.reload()
                });*/
            };
            $scope.backClick = function(){
                $scope.loading = true;
                switch ($state.current.name){
                    default:
                        $state.go('app');
                        $scope.header = 'Меню';
                        break;
                }
            };
        }
    ]);
});