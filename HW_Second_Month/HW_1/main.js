const numberInput = document.querySelector(".numberInput");
const buttonOnclick = document.querySelector(".buttonOnclick");

const innReg = /^\1 \d{12}$/;
buttonOnclick.addEventListener('click', () => {
    if(innReg.test(numberInput.value)){
        console.log('ok');
    }
}); 