$('#today_nav button').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#today_nav .btn').removeClass('btn-primary');
  $('#today_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light'); 
});

//Function For Showing the Summary 
function summaryResult() {
  const sumBtn = document.querySelector('#summary_btn');
  const sumContainer = document.querySelector('.caption');
  sumBtn.addEventListener('click', () => {
    sumContainer.classList.toggle('show_caption');
  })
};
summaryResult();
//function For Flag and Hand Buttons
function flagActive(){
  let flagBtns = document.querySelectorAll('.flag_btn');
  let handBtns = document.querySelectorAll('.hand_btn');
  flagBtns.forEach(flagbtn => {
    flagbtn.addEventListener('click', (e) => {
      let currentRow = e.currentTarget.parentElement.parentElement;
      if(currentRow.classList.contains('red')) {
        currentRow.classList.remove('red');
        currentRow.classList.remove('white');
        currentRow.classList.add('yellow');
        currentRow.classList.add('black');
      }else{
        currentRow.classList.toggle('yellow');
        currentRow.classList.toggle('black');
      }
    })
  });
  //Hand Btns
  handBtns.forEach(handBtn => {
    handBtn.addEventListener('click', (e) => {
      let currentRow = e.currentTarget.parentElement.parentElement;
      if(currentRow.classList.contains('yellow')) {
        currentRow.classList.remove('yellow');
        currentRow.classList.remove('black');
        currentRow.classList.add('red');
        currentRow.classList.add('white');
      }else{
        currentRow.classList.toggle('red');
        currentRow.classList.toggle('white');
      }
    })
  });
};
flagActive();