var app = angular.module('portfolio', ['ngRoute']);

app.component("navbar", {
  templateUrl: '/portfolio.github.io/inc/navbar.html',
  // templateUrl: '/shirtShop.github.io/navbar.html',
  controller: 'portfolio',
});
app.component("sidebar", {
  templateUrl: '/portfolio.github.io/inc/sidebar.html',
  // templateUrl: '/shirtShop.github.io/navbar.html',
  controller: 'portfolio',
});


app.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : '/portfolio.github.io/pages/home.html',
      controller  : 'portfolio'
    })

    // route for the about page
    .when('/about', {
      templateUrl : '/portfolio.github.io/pages/about.html',
      controller  : 'about'
    })

    // route for the skills page
    .when('/skills', {
      templateUrl : '/portfolio.github.io/pages/skills.html',
      controller  : 'portfolio'
    })

    // route for the porfolio page
    .when('/portfolio', {
      templateUrl : '/portfolio.github.io/pages/portfolio.html',
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
    $(".mainBlock").css("background-image", "url('/portfolio.github.io/data/img/header-image.png')");
  };
  $scope.hoverIn1 = function(){
    $(".mainBlock").css("background-image", "url('/portfolio.github.io/data/img/skills.jpg')");
  };
  $scope.hoverIn2 = function(){
    $(".mainBlock").css("background-image", "url('/portfolio.github.io/data/img/portfolio.jpg')");
  };
  $scope.hoverIn3 = function(){
    $(".mainBlock").css("background-image", "url('/portfolio.github.io/data/img/contact.jpg')");
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




