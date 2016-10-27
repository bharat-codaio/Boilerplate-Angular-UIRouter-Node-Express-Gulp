/**
 * Created by bharatbatra on 10/27/16.
 */
(() => {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .run(($http) =>{
            $http.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            // Toast Options
            toastr.options.positionClass = 'toast-bottom-full-width';
            toastr.options.showDuration = 500;
            toastr.options.hideDuration = 500;
            toastr.options.timeOut = 3000;

            console.log("Angular is loaded up!!!");
        })
        .config(($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider)=>{
            //$httpProvider.defaults.withCredentials = true;

            const launch = {
                name: 'launch',
                url: '/launch',
                templateUrl: '/static/templates/launch.html',
                controller: 'LaunchController'
            };

            $stateProvider.state(launch);

            $urlRouterProvider.otherwise('/launch');//always hit the launch state
            // $locationProvider.html5Mode(true);
        });
})();