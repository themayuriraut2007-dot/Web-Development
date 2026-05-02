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


let a = 55
let b = 55
let c = 55
let d = 55
let e = 55
let f = 55

if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                if (a > f) {
                    console.log("a is greatest")
                } else {
                    console.log("f is greatest")
                }
            } else {
                console.log("e is greatest")
            }
        } else {
            console.log("d is greatest")
        }
    } else {
        console.log("c is greatest")
    }
}
else if (b > c) {
    if (b > d) {
        if (b > e) {
            if (b > f) {
                console.log("b is greatest")
            } else {
                console.log("f is greatest")
            }
        } else {
            console.log("e is greatest")
        }
    } else {
        console.log("d is greatest")
    }
}
else if (c > d) {
    if (c > e) {
        if (c > f) {
            console.log("c is greatest")
        } else {
            console.log("f is greatest")
        }
    } else {
        console.log("e is greatest")
    }
}
else if (d > e) {
    if (d > f) {
        console.log("d is greatest")
    } else {
        console.log("f is greatest")
    }
}
else if (e > f) {
    console.log("e is greatest")
}
else {
    console.log("all numbers are equal!")
}

