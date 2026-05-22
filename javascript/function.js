
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
