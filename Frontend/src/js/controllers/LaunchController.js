/**
 * Created by bharatbatra on 10/27/16.
 */
(() => {
    'use strict';

    angular
        .module('app')
        .controller('LaunchController', LaunchController);


    function LaunchController(){
        toastr.success("Launch Controller Works with UI Router. BoilerPlate Setup!!!")
    }
})();