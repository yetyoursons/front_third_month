
const phoneInput = document.querySelector('.phoneInput');
const phoneClick = document.querySelector('.phoneClick');
const phoneResult = document.querySelector('.phoneResult');
console.log(phoneInput);
const phoneReg = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneClick.addEventListener('click', () => {
  if(phoneReg.test(phoneInput.value)){
    console.log('ok');
  }
});

