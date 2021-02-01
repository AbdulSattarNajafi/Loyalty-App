 // Nav
 $('#offer_nav button').unbind('click').click(function(e) {
  $('#offer_nav .btn').removeClass('btn-primary');
  $('#offer_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});

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