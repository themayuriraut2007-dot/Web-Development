// try catch block -> expectional/error handling



let number1 = 10
let number2 = 0

try {
    let division = number1 / number2;
    if (division == Infinity) {
        throw new Error("Division by 0 is not allowed !")
    }
    console.log(division)
} catch (err) {
    console.log(err)
} finally {
    console.log("code completed !")
}

// try {
//     console.log(a)
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("program completed !")
// }

