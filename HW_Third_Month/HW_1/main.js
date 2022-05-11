const numberInput = document.querySelector(".numberInput");
const buttonOnclick = document.querySelector(".buttonOnclick");
const numResult = document.querySelector('.numResult');
const innReg = /^1\d{11}$/;
buttonOnclick.addEventListener('click', () => {
    if(innReg.test(numberInput.value)){
        numResult.innerText = numberInput.value 
        numResult.style.color = 'blue'
    }
     else {
        numResult.innerText = 'Not correct thing'
        numResult.style.color = 'red'
    }
});



const move = document.querySelector('.block2')

let num = 0

const down = function () {
    num+= 10
    move.style.top = `${num}px`;
    if (num<10){
        down()
    }
}

move.addEventListener('click',down)