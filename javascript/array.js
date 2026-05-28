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




//  let i = 0
//  let numbers = [1, 2, 4, 5, 6]
//  let sqNumbers = []


// while (i < numbers.length) {
//     sqNumbers[i] = numbers[i] * numbers[i]
//     i++
// }

// console.log(sqNumbers)

// let students = [{ name: "student 1", marks: 78 }, { name: "student 2", marks: 81 }, { name: "student 3", marks: 87 }, { name: "student 4", marks: 92 }]

// let obtainedMarks = 0

// for (let i = 0; i < students.length; i++) {
//     obtainedMarks += students[i].marks
// }

// console.log(obtainedMarks)




// let numbers = [1, 2, 3, 4, 5]

// // console.log(numbers.length) // 5
// // // element add, remove 
// // // push() add elements in array from trailing side, unshift() add elements in array from leading side
// // // pop() remove elements from trailing side, shift() remove elements from leading side


// element add (push use karege to element add hoge par pichese 
  // like 5 ke bad 6 7 an 8 )

// numbers.push(6)
// numbers.push(7)
// numbers.push(8)

// console.log(numbers)


// elememt add hoge par aage se like 1 ke phele 0 etc. and use unshift

// numbers.unshift(0)
// numbers.unshift(-1)
// numbers.unshift(-2)

// console.log(numbers)


// elemnt remove (use pop and shift )

// niche hume pop 3 times likha to piche ke elememts delete hoge 
// aur output [1 ,2] ayega (pop piche ke element delete krta hai)

// numbers.pop()
// numbers.pop()
// numbers.pop()

// console.log(numbers)


// shift mai aage se number delete hote hai

// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()

// console.log(numbers)



// agar element remove krna hai aur new element add karna hai to use splice

// // numbers.splice(start, delete, replacement)

// console.log(numbers)

// numbers.splice(3,1,7) // index number , 4 is remove and 7 is add

// console.log(numbers)



// let fruits = "apple,mango,banana,dargon fruit,grapes,water melon"

// let fruitArray = fruits.split(",")

// console.log(fruitArray)



// // looping for array [for of, for each, map, filter]


// let fruits = "apple,mango,banana,dargon fruit,grapes,water melon"
// let fruitArray = fruits.split(",")

// // for of

// for(let x of fruitArray){
//     console.log("i like "+x)
// }

// //for each 

// const sqNumber = (x) => {
//     console.log(x*x)
// }

// numbers.forEach(sqNumber)

// let newNumbers = [5,6,7,8,9,10]
// newNumbers.forEach(sqNumber)




// linear search -->

//  let numbers = [10, 12, 3, 15, 6, 2, 1, 5, 9]

//  let searchValue = 5

// let position = 0

//  let flag = false

//  let steps = 0

// for (let i = 0; i < numbers.length; i++) {
//     steps++
//     if (numbers[i] == searchValue) {
//         position = i + 1
//         flag = true
//         break;
//     }
// }

// if (flag) {
//     console.log('we found element ${searchValue} at position ${position} !')
//     console.log('in ${steps} steps')
// } else {
//     console.log('unable to found element ${searchValue} in array !')
//     console.log('in ${steps} steps')
// }

// time complexity -> O(n)



// binary search -->


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]

// let searchValue = 2

// let flag = false

// let lb = 0

// let ub = numbers.length - 1

// let position = 0

// let steps = 0

// let midPoint;
// while (lb < ub) {
//     steps++

//     midPoint = Math.ceil((lb + ub) / 2)//rounding off to get intergers as the index cannot be float points

//     if (numbers[midPoint] == searchValue) {
//         flag = true
//         position = midPoint + 1
//         break;
//     }

//     if (numbers[midPoint] < searchValue) {
//         lb = midPoint + 1
//         // RHS
//     } else {
//         ub = midPoint - 1
//     }
// }

// if (flag) {
//     console.log('we found element ${searchValue} at position ${position} !')
//     console.log('in ${steps} steps')
// } else {
//     console.log('unable to found element ${searchValue} in array !')
//     console.log('in ${steps} steps')
// }





// bubble sort -->


// let numbers = [5, 5, 2, 1, 2, 8, 0, -9]

// let swaped = false

// for (let i = 0; i < numbers.length - 1; i++) {

//     swaped = false

//     for (let j = 0; j < numbers.length - i - 1; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//             // swap
//             let temp = numbers[j]
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp

//             swaped = true

//         }
//     }
//     if (!swaped) break
// }

// console.log("sorted array")
// console.log(numbers)



// selection sort -->


let numbers = [3, 5, 2, 1, 4, 0, -1, 5, 2]

for (let i = 0; i < numbers.length - 1; i++) {
    minIndex = i
    // swaping 
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j
        }
    }
    // swap
    let temp = numbers[minIndex]
    numbers[minIndex] = numbers[i]
    numbers[i] = temp
}

console.log("sorted array : ")
console.log(numbers)

// following is a direct to print the sorted array -->

// numbers.sort((a, b) => b - a)

// console.log(numbers)