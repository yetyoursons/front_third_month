
const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur")


// som.addEventListener("input", () =>{
//     const request = new XMLHttpRequest();
//     request.open("GET","data.json");
//     request.setRequestHeader("Content-type","application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);
//         usd.value = (som.value / response.usd).toFixed(2);
//     });
// });

function convert (elem, target, isTrue) {
    elem.addEventListener("input", () =>{
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () =>{
            const response = JSON.parse(request.response);
            if(isTrue){
                target.value = (elem.value / response.usd).toFixed(2);
            } else{
                target.value = (elem.value * response.usd).toFixed(2);
            }
            elem.value === "" ? (target.value = "") : null;
        });
        elem.addEventListener('input', () =>{
            const request  = new XMLHttpRequest();
            request.open("GET", "data.json");
            request.setRequestHeader("Content-type", "application/json");
            request.send();
            request.addEventListener("load", ()=>{
                const response2 = JSON.parse(request.response2);
                if(isTrue){
                    target.value = (elem.value / response2.eur).toFixed(2);
                } else{
                    target.value = (elem.value * response2.eur).toFixed(2);
                }
                elem.value === "" ? (target.value = "") : null;
            });
        });
    });
}
convert(som, eur, 12);
convert(eur, som);
convert(som, usd, 12);
convert(usd, som)
convert(usd, eur, 12);
convert(eur, usd)


