const login = document.querySelector('.login');

login.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#Name').value;
  const pass = document.querySelector('#pass').value;
  if (name !=='' && pass !==''){
    login.innerHTML = '';
    login.classList.add('spinner');
    setTimeout(() => {
        location.reload();
    }, 3000);
  }else{
      window.alert('Enter Email and Password');
  }
  
})