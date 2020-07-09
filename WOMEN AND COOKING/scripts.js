
$(window).scroll(scrollFunction);


function scrollFunction() {
  if ( $(window).scrollTop() > 20 ) {
    $("#go-top-button").show();
  } else {
    $("#go-top-button").hide();
  }
};

$('#go-top-button').each(function(){
  $(this).click(function(){ 
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false; 
  });
});

