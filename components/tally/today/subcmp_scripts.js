$('#today_nav button').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#today_nav .btn').removeClass('btn-secondary');
  $('#today_nav .btn').addClass('btn-light');
  $(this).addClass('btn-secondary'); 
  $(this).removeClass('btn-light'); 
});