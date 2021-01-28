$('#today_nav button').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#today_nav .btn').removeClass('btn-primary');
  $('#today_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light'); 
});