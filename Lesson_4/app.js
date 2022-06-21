// console.log('123');

// window.addEventListener("scroll",()=>{
//     console.log(window.pageYOffset);
// });


const obj = {
    name: "John",
    age: "20"
}

// console.log(obj, "obj");

// const data =  JSON.stringify(obj);
// console.log(data,"string");

// console.log(JSON.parse(data),"parse");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET","data.json");
    request.setRequestHeader("Content-type","application/json");
    request.send();
    request.addEventListener("load",()=>{
        const data = JSON.parse(request.response);
        console.log(request.response);
        console.log(data);
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".name").innerHTML = data.age;
    });
});