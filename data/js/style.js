// $(document).ready(function(){
//   $(".menu-btn button").click(function(){
//     console.log("clicked");
//     $(".hamburger").toggleClass("menu-active");
//     $(".sidebar").toggleClass("sidebar-active");
//     $(".main").toggleClass("main-expand");
//   });
  $(".navItem").click(function(){
    $(".hamburger").removeClass("menu-active");
    $(".sidebar").removeClass("sidebar-active");
    $(".main").removeClass("main-expand");
  });
// });
