"use strict";angular.module("mywebsiteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"partials/home.html",controller:"HomeCtrl"}).state("projects",{url:"/projects",templateUrl:"partials/projects.html",controller:"ProjectsCtrl"}).state("resume",{url:"/resume",templateUrl:"partials/resume.html",controller:"ResumeCtrl"}).state("about",{url:"/about",templateUrl:"partials/about.html",controller:"AboutCtrl"}).state("contact",{url:"/contact",templateUrl:"partials/contact.html",controller:"ContactCtrl"})}]),angular.module("mywebsiteApp").controller("HomeCtrl",["$scope","$timeout",function(a,b){a.title="Front-end Developer",a.info="@ Shutterfly",a.projects={one:!1,two:!1,three:!1},a.showInfo=function(b,c){a.projects[b]=c},$(".nav").find("a").removeClass("active"),$(".home").children("a").addClass("active"),$("#nav-title1").find("em").text(a.title),$("#nav-title2").find("h2").text(a.info),$("#titles").removeClass("titles-animate"),b(function(){$("#titles").addClass("titles-animate")}),$(".navbar").removeClass(function(){return $(this).attr("class")}),$("#navbar").addClass("navbar custom-navbar home-background")}]),angular.module("mywebsiteApp").controller("ProjectsCtrl",["$scope","$timeout",function(a,b){a.title="Projects",a.info="Work and Personal Stuff I've worked on",$(".nav").find("a").removeClass("active"),$(".projects").children("a").addClass("active"),$("#nav-title1").find("em").text(a.title),$("#nav-title2").find("h2").text(a.info),$("#titles").removeClass("titles-animate"),b(function(){$("#titles").addClass("titles-animate")}),$(".navbar").removeClass(function(){return $(this).attr("class")}),$("#navbar").addClass("navbar custom-navbar projects-background")}]),angular.module("mywebsiteApp").controller("ResumeCtrl",["$scope","$timeout",function(a,b){a.title="Skills",a.info="Qualifications and Experiences",$(".nav").find("a").removeClass("active"),$(".resume").children("a").addClass("active"),$("#nav-title1").find("em").text(a.title),$("#nav-title2").find("h2").text(a.info),$("#titles").removeClass("titles-animate"),b(function(){$("#titles").addClass("titles-animate")}),$(".navbar").removeClass(function(){return $(this).attr("class")}),$("#navbar").addClass("navbar custom-navbar resume-background")}]),angular.module("mywebsiteApp").controller("AboutCtrl",["$scope","$timeout",function(a,b){a.title="Who am I?",a.info="Get to know me",$(".nav").find("a").removeClass("active"),$(".about").children("a").addClass("active"),$("#nav-title1").find("em").text(a.title),$("#nav-title2").find("h2").text(a.info),$("#titles").removeClass("titles-animate"),b(function(){$("#titles").addClass("titles-animate")}),$(".navbar").removeClass(function(){return $(this).attr("class")}),$("#navbar").addClass("navbar custom-navbar about-background")}]),angular.module("mywebsiteApp").controller("ContactCtrl",["$scope","$timeout",function(a,b){a.title="Let's Talk",a.info="How to reach me",$(".nav").find("a").removeClass("active"),$(".contact").children("a").addClass("active"),$("#nav-title1").find("em").text(a.title),$("#nav-title2").find("h2").text(a.info),$("#titles").removeClass("titles-animate"),b(function(){$("#titles").addClass("titles-animate")}),$(".navbar").removeClass(function(){return $(this).attr("class")}),$("#navbar").addClass("navbar custom-navbar contact-background")}]),angular.module("mywebsiteApp").directive("milestonesTimeline",function(){return{restrict:"E",templateUrl:"../partials/milestones.html",scope:{},link:function(a){a.expand=!1,a.milestones=[{year:1983,expand:!1,event:"I was born"},{year:2012,expand:!1,event:"MS/BS Computer Engineering; Married high school sweetheart"},{year:2013,expand:!1,event:"Alyssa was born"},{year:2014,expand:!1,event:"First software developer role at GE"},{year:2015,expand:!1,event:"Currently a Site Reliability Engineer @ Shutterfly"}],a.expandEvent=function(a,b){"true"===b?a.expand=!0:a.expand=!1}}}});