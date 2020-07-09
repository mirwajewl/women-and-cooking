
$(window).scroll(scrollFunction);


function scrollFunction() {
  if ( $(window).scrollTop() > 20 ) {
    $("#go-top-button").show();
  } else {
    $("#go-top-button").hide();
  }
};


function topFunction() {
  $(window).scrollTop(0);
}
