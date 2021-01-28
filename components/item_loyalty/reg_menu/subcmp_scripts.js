 // Nav
 $('#offer_nav button').unbind('click').click(function(e) {
  $('#offer_nav .btn').removeClass('btn-primary');
  $('#offer_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});




