define(['angular'], function (angular) {

    'use strict';

    /**
     * @ngdoc function
     * @name mywebsiteApp.controller:MainCtrl
     * @description
     * # HomeCtrl
     * Controller of the mywebsiteApp
     */
    angular.module('mywebsiteApp.controllers.ResumeCtrl', [])
        .controller('ResumeCtrl', function ($scope, $timeout) {
            
            /*** DEFAULTS ***/

            $scope.title = 'Skills';
            $scope.info = 'Qualifications and Experiences';


            /*** INITIALIZE ***/

            // Hide canvas element outside home
            $('#canv').css('display', 'none');    

            // Activate selected page header
            $('.nav').find('a').removeClass('active');
            $('.resume').children('a').addClass('active');      

            // Add specific data to nav area
            $('#nav-title1').find('em').text($scope.title);
            $('#nav-title2').find('h2').text($scope.info); 
            $('#titles').removeClass('titles-animate');
            $timeout(function () {
                $('#titles').addClass('titles-animate');
            });

            // Custom nav header background
            $('.navbar').removeClass(function () {
                return $(this).attr('class');
            });
            $('#navbar').addClass('navbar custom-navbar resume-background');                    
        });
});