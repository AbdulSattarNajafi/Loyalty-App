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

//Pagination
{
  var allPages = 100;
  
  function paginationFunction(allPages, page) {
    const ulElements = document.querySelector('#pagination');
    let liTag = '';
    let beforePage = page - 1;
    let afterPage = page + 1;
    let activeLi;
    if(page > 1) {
      liTag += `<li class="btn prev" onclick="paginationFunction(allPages, ${page - 1})"><i class="fas fa-chevron-left"></i> Prev</li>`;
    }
  
    if(page > 2) {
      liTag += `<li class="numb" onclick="paginationFunction(allPages, 1)">1</li>`;
      if(page > 3){
        liTag += `<li class="dots">...</li>`;
      }
    };
  
    if(page == allPages) {
      beforePage = beforePage - 2;
    }else if(page == allPages - 1){
      beforePage = beforePage - 1;
    };
  
    if(page == 1) {
      afterPage = afterPage + 2;
    }else if(page == 2) {
      afterPage = afterPage + 1;
    };
  
    for(let pageLength = beforePage; pageLength <= afterPage; pageLength ++) {
      if(pageLength > allPages) {
        continue;
      };
  
      if(pageLength == 0) {
        pageLength = pageLength + 1;
      }
      if(page == pageLength) {
        activeLi = 'active'
      }else{
        activeLi = '';
      };
  
      liTag += `<li class="numb ${activeLi}" onclick="paginationFunction(allPages, ${pageLength})">${pageLength}</li>`;
    };
  
    if(page < allPages - 1) {
      if(page < allPages - 2){
        liTag += `<li class="dots">...</li>`;
      }
  
      liTag += `<li class="numb" onclick="paginationFunction(allPages, ${allPages})">${allPages}</li>`;
    }
  
    if(page < allPages) {
      liTag += `<li class="btn next" onclick="paginationFunction(allPages, ${page + 1})">Next <i class="fas fa-chevron-right"></i></li>`;
    }
    ulElements.innerHTML = liTag;
  };
  paginationFunction(allPages, 1);
};
