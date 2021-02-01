//Function For Showing the Summary 
function summary() {
  const sumBtn = document.querySelector('#summary_btn');
  const sumContainer = document.querySelector('.caption');
  sumBtn.addEventListener('click', () => {
    sumContainer.classList.toggle('show_caption');
  })
};
summary();

//Pagination
{
var totalPages = 100;

function paginationFunction(totalPages, page) {
  const containerPaginations = document.querySelector('#pagina');
  let liTag = '';
  let beforePage = page - 1;
  let afterPage = page + 1;
  let activeLi;
  if(page > 1) {
    liTag += `<li class="btn prev" onclick="paginationFunction(totalPages, ${page - 1})"><i class="fas fa-chevron-left"></i> Prev</li>`;
  }

  if(page > 2) {
    liTag += `<li class="numb" onclick="paginationFunction(totalPages, 1)">1</li>`;
    if(page > 3){
      liTag += `<li class="dots">...</li>`;
    }
  };

  if(page == totalPages) {
    beforePage = beforePage - 2;
  }else if(page == totalPages - 1){
    beforePage = beforePage - 1;
  };

  if(page == 1) {
    afterPage = afterPage + 2;
  }else if(page == 2) {
    afterPage = afterPage + 1;
  };

  for(let pageLength = beforePage; pageLength <= afterPage; pageLength ++) {
    if(pageLength > totalPages) {
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

    liTag += `<li class="numb ${activeLi}" onclick="paginationFunction(totalPages, ${pageLength})">${pageLength}</li>`;
  };

  if(page < totalPages - 1) {
    if(page < totalPages - 2){
      liTag += `<li class="dots">...</li>`;
    }

    liTag += `<li class="numb" onclick="paginationFunction(totalPages, ${totalPages})">${totalPages}</li>`;
  }

  if(page < totalPages) {
    liTag += `<li class="btn next" onclick="paginationFunction(totalPages, ${page + 1})">Next <i class="fas fa-chevron-right"></i></li>`;
  }
  containerPaginations.innerHTML = liTag;
};
paginationFunction(totalPages, 1);
};