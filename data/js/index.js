var app = angular.module('portfolio', ['ngRoute']);

app.component("navbar", {
  templateUrl: '/inc/navbar.html',
  // templateUrl: '/shirtShop.github.io/navbar.html',
  controller: 'portfolio',
});
app.component("sidebar", {
  templateUrl: '/inc/sidebar.html',
  // templateUrl: '/shirtShop.github.io/navbar.html',
  controller: 'portfolio',
});


app.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'portfolio'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'about'
    })

    // route for the skills page
    .when('/skills', {
      templateUrl : 'pages/skills.html',
      controller  : 'portfolio'
    })

    // route for the porfolio page
    .when('/portfolio', {
      templateUrl : 'pages/portfolio.html',
      controller  : 'portfolio'
    })

    // route for the contact page
    // .when('/contact', {
    //   templateUrl : 'pages/contact.html',
    //   controller  : 'contactController'
    // });
});


app.controller("portfolio", ["$scope", function ($scope) {
  $scope.hoverIn = function(){
    $(".mainBlock").css("background-image", "url('/data/img/header-image.png')");
  };
  $scope.hoverIn1 = function(){
    $(".mainBlock").css("background-image", "url('/data/img/skills.jpg')");
  };
  $scope.hoverIn2 = function(){
    $(".mainBlock").css("background-image", "url('/data/img/portfolio.jpg')");
  };
  $scope.hoverIn3 = function(){
    $(".mainBlock").css("background-image", "url('/data/img/contact.jpg')");
  };
  $scope.openMenu = function(){
    $(".hamburger").toggleClass("menu-active");
    $(".sidebar").toggleClass("sidebar-active");
    // $(".main").toggleClass("main-expand");
  }
  $(".navItem").click(function(){
    $(".hamburger").removeClass("menu-active");
    $(".sidebar").removeClass("sidebar-active");
    // $(".main").removeClass("main-expand");
  });
}]);

app.controller("about", ["$scope", function ($scope) {
  
}]);




