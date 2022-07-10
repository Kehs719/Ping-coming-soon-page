const email = document.getElementById('email');
const errorText = document.getElementById('error-text');
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
 if (regex.test(email.value)){
    email.classList.remove('input-error');
    errorText.classList.remove('block');
  }else{
    email.classList.add('input-error');
    errorText.classList.add('block');
  }
}