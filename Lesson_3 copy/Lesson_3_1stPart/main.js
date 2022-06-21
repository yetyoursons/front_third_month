// function varTest() {
//     var x = 1
//     if (true) {
//         var x = 2
//         console.log(x,'log1')
//     }
//     console.log(x,'log2')
// }

// varTest();
// var не ограничен областью видимости

// function letTest() {
//     let x = 1
//     if (true) {
//         let x = 2
//         console.log(x,'log1');
//     }
//     console.log(x,'log2');
// }

// letTest();
// let ограничен областью видимости 

// const doHomeTasks = (subject, callback) =>{
//     alert(`do your ${subject}`);
//     callback()
// }
// // Callback пишешь в ту которая раньше следующей функции
// const alertFinished = () =>{
//     alert("My hw is finished")
// }


// doHomeTasks("math", alertFinished)

const btn  = document.querySelectorAll('button')

// btn.forEach((item) =>{
//     console.log(item);
//     item.addEventListener('click', (event) =>{
//         console.log(event.target)
//         if(event.target.classList.contains('red')){
//             event.target.classList.remove('red')
//         } else {
//             event.target.classList.add('red')
//         }
//     })
// })

const wrapper = document.querySelector(".btns");
const newBtn = document.createElement('button');

wrapper.append(newBtn);

wrapper.addEventListener('click', (event) =>{
    console.log(event);
    if(event.target.tagName === "BUTTON"){
        console.log(event.target);
        console.dir(event.target);
        if(event.target.classList.contains('red')){
            event.target.classList.remove('red')
        } else{
            event.target.classList.add('red')
        }
        // dir выводит много информации
    }
})
