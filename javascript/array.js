 // Array


// let arr = ["mayuri", 20, "sakkardhara nagpur", true]


// sizeof(arr)

// array[0] // "mayuri"
// array[1] = 34 // 34

// array.length // 4

// console.log(arr)





// let i = 0;

// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }




 let i = 0
 let numbers = [1, 2, 4, 5, 6]
 let sqNumbers = []


while (i < numbers.length) {
    sqNumbers[i] = numbers[i] * numbers[i]
    i++
}

console.log(sqNumbers)

let students = [{ name: "student 1", marks: 78 }, { name: "student 2", marks: 81 }, { name: "student 3", marks: 87 }, { name: "student 4", marks: 92 }]

let obtainedMarks = 0

for (let i = 0; i < students.length; i++) {
    obtainedMarks += students[i].marks
}

console.log(obtainedMarks)

