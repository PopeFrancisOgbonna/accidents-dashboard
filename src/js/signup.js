const user = document.querySelector('#user-btn');
const service = document.querySelector('#service-btn');
const userLog = document.querySelector('#user');
const serviceLog = document.querySelector('#service');
const servOpt = document.querySelector('#serviceOp');
const servCreate = document.querySelector('.serviceAcc');
const userCreate = document.querySelector('#user-Acc');

// functions for various events 
toggleClass = (form) => {
  userLog.classList.add('hide');
  serviceLog.classList.add('hide');
  form.classList.remove('hide');
}
option = (btn) => {
  service.disabled = false;
  user.disabled = false;
  btn.disabled = true;
}
spin = (btn) => {
  btn.innerHTML='';
  btn.classList.add('spinner');
}

//Event listeners
user.addEventListener('click', (e) => {
  e.preventDefault();
  option(user);
  toggleClass(userLog);
});
service.addEventListener('click', (e) => {
  e.preventDefault();
  option(service);
  toggleClass(serviceLog);
});
servOpt.addEventListener('change', () => {
  const label = document.querySelector('#descLab');
  const inpt = document.querySelector('#desc');
  if (servOpt.value === 'Others'){
      label.classList.remove('hide');
      inpt.classList.remove('hide');
  } else {
      label.classList.add('hide');
      inpt.classList.add('hide');
  }
});
//Creating Accounts for Emergency service provider
servCreate.addEventListener('click', (e) => {
  e.preventDefault();
  //validate inputs
  const servName = document.querySelector('#cname').value;
  const loctn = document.querySelector('#caddress').value;
  const mail = document.querySelector('#cemail').value;
  const phon = document.querySelector('#cphone').value;
  const pass = document.querySelector('#cpass').value;
  const pass2 = document.querySelector('#cpass1').value;
  const warning = document.querySelector('.warn');
  if (servName !=='' && loctn !=="" && mail !=='' && phon !=='' && pass !=='' && pass2 !=='')
  {
    if(Number(phon) && mail.includes('@') && servOpt.value !=='' && pass === pass2)
    {
      warning.innerHTML = '';
      spin(servCreate);
      setTimeout(() => {
        window.alert('Account created successfully. Please confirm the email sent to you.');
        location.reload(true);
      }, 3000);
    }else{
      warning.innerHTML = 'Incorrect input';
      warning.style.color = 'red';
    }   
  }else{
    warning.innerHTML = 'Please fill out all Fields';
    warning.style.color = 'red';
  }
});
// Creating account for users of the system
userCreate.addEventListener('click', (e) => {
  e.preventDefault();
  //validate inputs
  const name = document.querySelector('#fullName').value;
  const loctn = document.querySelector('#address').value;
  const mail = document.querySelector('#email').value;
  const phon = document.querySelector('#phone').value;
  const pass = document.querySelector('#pass').value;
  const pass2 = document.querySelector('#pass1').value;
  const warning = document.querySelector('.warn-user');
  if (name !=='' && loctn !=="" && mail !=='' && phon !=='' && pass !=='' && pass2 !=='')
  {
    if(Number(phon) && mail.includes('@') && pass === pass2)
    {
      warning.innerHTML = '';
      spin(userCreate);
      setTimeout(() => {
        window.alert('Account created successfully. Please confirm the email sent to you.');
        location.reload(true);
      }, 3000);
    }else{
      warning.innerHTML = 'Incorrect input';
      warning.style.color = 'red';
    }   
  }else{
    warning.innerHTML = 'Please fill out all Fields';
    warning.style.color = 'red';
  }
})

