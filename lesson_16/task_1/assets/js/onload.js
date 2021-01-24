$(document).ready(function(){
    // $(document).click(function(){
        if($(document).scrollTop() > 500){
            $('.navbar').addClass('fixed');
        }else{
            $('.navbar').removeClass('fixed');
        };
        if($(this).parents('#mobile_menu').lenght!=0){
          $(".hamburger")[0].click();
        }
    // });
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".mobile_menu, .menu_shadow").toggleClass("opened");
});
    $(".menu_shadow").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".mobile_menu, .menu_shadow").removeClass("opened");
  });

});
let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }