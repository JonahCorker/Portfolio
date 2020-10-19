
window.scrollTo(0, 0);

window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});



$(".top").click(function () {
    //html and body is used because of Browser compatibilit
    $("html, body").animate({scrollTop: -5}, 1000);
    });

  
