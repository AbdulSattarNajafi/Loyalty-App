$('#today_nav button').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#today_nav .btn').removeClass('btn-primary');
  $('#today_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light'); 
});

//function For Flag and Hand Buttons
function flagActive(){
  let flagBtns = document.querySelectorAll('.flag_btn');
  let handBtns = document.querySelectorAll('.hand_btn');
  flagBtns.forEach(flagbtn => {
    flagbtn.addEventListener('click', (e) => {
      let currentRow = e.currentTarget.parentElement.parentElement;
      if(currentRow.classList.contains('red')) {
        currentRow.classList.remove('red')
        currentRow.classList.add('yellow')
      }else{
        currentRow.classList.toggle('yellow');
      }
    })
  });
  //Hand Btns
  handBtns.forEach(handBtn => {
    handBtn.addEventListener('click', (e) => {
      let currentRow = e.currentTarget.parentElement.parentElement;
      if(currentRow.classList.contains('yellow')) {
        currentRow.classList.remove('yellow');
        currentRow.classList.add('red');
      }else{
        currentRow.classList.toggle('red');
      }
    })
  });
};
flagActive();