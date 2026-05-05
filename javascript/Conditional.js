// If statement -->

// let num=2
// if(num%2==0) {
//     console.log(" Even Number")
// } 
// console.log("program is end")



// If-else -->

// let num=3
// if(num%2==0) {
//     console.log("Even number")
// } else{
//     console.log("Odd number")
// }
// console.log("program is end")


// Nested if --- else

// let a=20
// let b=30
// let c=40

// if(a>b) {
//     if(a>c)
//     {
//         console.log("A is greater")
//     }
//     else {
//         console.log("C is greater")
//     }
// }
// else{
//     if(b>c)
//     {
//         console.log("B is greater")
//     }
//     else {
//         console.log("C is greater")
//     }
// }


//if  else- if


// let a = 55
// let b = 55
// let c = 55
// let d = 55
// let e = 55
// let f = 55

// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             if (a > e) {
//                 if (a > f) {
//                     console.log("a is greatest")
//                 } else {
//                     console.log("f is greatest")
//                 }
//             } else {
//                 console.log("e is greatest")
//             }
//         } else {
//             console.log("d is greatest")
//         }
//     } else {
//         console.log("c is greatest")
//     }
// }
// else if (b > c) {
//     if (b > d) {
//         if (b > e) {
//             if (b > f) {
//                 console.log("b is greatest")
//             } else {
//                 console.log("f is greatest")
//             }
//         } else {
//             console.log("e is greatest")
//         }
//     } else {
//         console.log("d is greatest")
//     }
// }
// else if (c > d) {
//     if (c > e) {
//         if (c > f) {
//             console.log("c is greatest")
//         } else {
//             console.log("f is greatest")
//         }
//     } else {
//         console.log("e is greatest")
//     }
// }
// else if (d > e) {
//     if (d > f) {
//         console.log("d is greatest")
//     } else {
//         console.log("f is greatest")
//     }
// }
// else if (e > f) {
//     console.log("e is greatest")
// }
// else {
//     console.log("all numbers are equal!")
// }


// Switch Case -->

// let number1 = Number(window.prompt("enter number 1 "))
// let number2 = Number(window.prompt("enter number 2"))


//  let choice = window.prompt("enter choice 1. Add, 2. Sub 3. Mul, 4. DIv, 5.Modulas")

// switch (choice) {
//     case "1":
//         console.log(number1 + number2)
//         break;
//     case "2":
//         console.log(number1 - number2)
//         break;
//     case "3":
//         console.log(number1 * number2)
//         break;
//     case "4":
//         console.log(number1 / number2)
//         break;
//     case "5":
//         console.log(number1 % number2)
//         break;
//     case "kuch bhi":
//         console.log("kuch bhi works !")
//         break;
//     default:
//         console.log("nothing matched please enter value between 1 to 5")
// }



// switch (window.prompt("enter char")) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("entred char is vowel !")
//         break;
//     default:
//         console.log('consolant')
// }


// switch (window.prompt("Enter numbe Between 1 to 10")) {
//     case "0":
//     case "2":
//     case "4":
//     case "6":
//     case "8":
//     case "10":
//         console.log("You Enter Even Number Between 1 to 10")
//         break;
//     default:
//         console.log('you not enter even number')
// }



// Using Logical Statement -->


//  leap year > 

// let year = 2024

// if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//     console.log(' leap year !')
// }else{
//     console.log("not a leap year !")
// }



let a = 19
let b = 19
let c = 19
let d = 19
let e = 19
let f = 19

if (a > b && a > c && a > d && a > e && a > f) {
    console.log("a is greatest")
}
else if (b > a && b > c && b > d && b > e && b > f) {
    console.log("b is greatest")
}
else if (c > a && c > b && c > d && c > e && c > f) {
    console.log("c is greatest")
}
else if (d > a && d > b && d > c && d > e && d > f) {
    console.log("d is greatest")
}
else if (e > a && e > b && e > c && e > d && e > f) {
    console.log("e is greatest")
}
else if (f > a && f > b && f > c && f > d && f > e) {
    console.log("f is greatest")
}
else {
    console.log("all numbers are equal or some are same")
}


