// function promise1(){
//     return new Promise((resolve,reject)=>{
//     let data = 10;
//     setTimeout(()=>{
//       if(data < 100){
//         reject("data value is less !")
//       }else{
//         resolve("data value is correct !")
//       }
//     },5000)
//   })
// }

// async function runPromise(){
//   try{
//    await promise1()
//   }catch(err){
//     console.log("some error/exception occured !")
//     console.log(err)
//   }
// }

// runPromise()
//  let myPromise = new Promise((resolve,reject)=>{
//   let data = 10;
//   setTimeout(()=>{
//     if(data < 100){
//       reject("data value is less !")
//     }else{
//       resolve("data value is correct !")
//     }
//   },5000)
// })

// // handle : then & catch, try catch(async & await)

// myPromise.then((resolve)=>{
//       console.log("promise resolved !")
//       console.log(resolve)
// }).catch((error)=>{
//          console.log(error)
// })


// Example 

// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Task Completed");
//     } else {
//         reject("Task Failed");
//     }
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });









