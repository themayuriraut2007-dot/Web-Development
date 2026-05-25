
// factorial(5)
// factorial(4)
// factorial(2)
// factorial(9)

let greet = (name) => {
    console.log("hello " + name)
}

const add = (n1, n2) => {
    console.log(n1 + n2)
}

function factorial(number) {
    let org_number = number
    let fact = 1;
    while (number != 0) {
        fact = fact * number
        number--
    }
    console.log(`factorial of ${org_number} is ${fact}`)
}

greet("rahul")
greet("sai")
greet("monu")

factorial(5)
factorial(4)
factorial(2)
factorial(9)



 // 4 types of function

// no args and no return

// function sayHello() {
//     console.log('hello')
// }

// sayHello()
// sayHello()
// sayHello()


//  args and return 

// function add(n1, n2) {
//     let sum = n1 + n2
//     return sum
// }

// let result = add(10, 20) //30

// console.log(result)

// console.log(add(10, 21)) //31

// if (add(20, 22) < 35) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // args but no return 

// function factorial(number) {
//     let org_number = number
//     let fact = 1;
//     while (number != 0) {
//         fact = fact * number
//         number--
//     }
//     console.log(`factorial of ${org_number} is ${fact}`)
// }

// factorial(5)

// // no args but return 

// // message function

// function isError() {
//     return true
//     // console.log(1)
//     // console.log(2)
//     // console.log(3)
// }

// function isSuccess() {
//     return true
// }

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (element, index) {
    console.log(element, " at index ", index)
})

// let newArray = numbers.forEach((element, index) => {
//     if (element % 2 == 0) {
//         return element
//     }
// })

let newArray = numbers.map((element, index) => {
    if (element % 2 == 0) {
        return element
    }
})

let newArray1 = numbers.filter((element) => {
    return element % 2 == 0
})

console.log(newArray)
console.log(newArray1)

// forEach cannot return anything