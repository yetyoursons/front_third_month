// setTimeout(()=> {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     },1000);
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("2");
//             setTimeout(() => {
//                 console.log("2");
//                 setTimeout(() => {
//                     console.log("2");
//                     setTimeout(() => {
//                         console.log("2");
//                         setTimeout(() => {
//                             console.log("2");
//                             setTimeout(() => {
//                                 console.log("2");
//                                 setTimeout(() => {
//                                     console.log("2");
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);
// },2000);
//  это мрак так нельзя

// setTimeout (() => {
//     console.log("подготовка");
//     const product = {
//         name: "Iphone",
//         price: "123",
//     };
//     setTimeout(() => {
//        product.status = "ordered" ;
//     console.log(product);
//     },2000);
// }, 1000 );

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("подготовка");
//         const product = {
//             name: "Iphone",
//             price: "123",
//         };  
//         resolve(product);
//     }, 2000);
// });

// const resolveData = (product) => {
//     setTimeout(() => {
//        product.status = "ordered" ;
//     console.log(product);
//     },2000);
// }
// req.then(resolveData);

// req.then ((product) => {
//     const req2 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//     product.status = "ordered" ;
//     console.log(product,'1');
//     resolve();
//     },2000);
//     }); req2.then(()=>{
//         product.isModified = true;
//         console.log(product,'2');
//     })
// })

