//Function for Inactive buttons
function inactiveBtns() {
  let inactiveBTns = document.querySelectorAll('.inactive_btn');
  inactiveBTns.forEach(activeBtn => {
    activeBtn.addEventListener('click', (e) => {
      activeBtn.classList.remove('btn-seconday')
      activeBtn.classList.toggle('btn-success');
      e.target.textContent == 'Active' ? e.target.textContent = 'Inactive' : e.target.textContent = 'Active';
    })
  });
};
inactiveBtns();