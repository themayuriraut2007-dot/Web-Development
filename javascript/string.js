// string -->

// let fname = "mayuri"
// let lname = "raut"

// let fullname = fname + " " + lname  // this is a concatination
// console.log(fullname)



// index value -->


// let fname  = "mayuri"
// console.log(fname[0])
// console.log(fname[1])
// console.log(fname[2])
// console.log(fname[3])
// console.log(fname[4])
// console.log(fname[5])

// ( index value mai agar hum index number de to us index no par jo hai ho print hoga
// ex- maine index 0 diya to muzhe output mai "m" mila )



// length --> 


// let name1 = "hello"
// console.log(name1.length)

// console.log(name1[0])
// console.log(name1[1])
// console.log(name1[2])


// charAt -->

// (it is simlar to index but charAt only use for charecter not a number)

// let name2 = "world"
// console.log(name2.charAt(0))
// console.log(name2.charAt(1))
// console.log(name2.charAt(2))
// console.log(name2.charAt(3))
// console.log(name2.charAt(4))


// let name1 = "hello"

// console.log(name1.indexOf("h")) 
// console.log(name1.indexOf("e")) 
// console.log(name1.indexOf("l"))
// console.log(name1.indexOf("l"))



// indexof use karne ke bad  hum index print kar skte hai
// ex- h ka index hai 0

// this a first occurance. ex- l give 2 also 2nd l give 2


// last occurences >

// let string1 = "hello"

// console.log(string1 .lastIndexOf("h"))
// console.log(string1 .lastIndexOf("e"))
// console.log(string1 .lastIndexOf("l"))
// console.log(string1 .lastIndexOf("l"))
// console.log(string1 .lastIndexOf("o"))

// in this case l index is 3 because last occurences


// Substring --> 


// ( use to break the string )

// let name3 = "hello world"
//  let newname = name3.substring(6,11) // (start , end)
// console.log(newname)

// o/p -> world


// Uppercase and Lowercase -->

// let string4 = "khushi"
// string4 = string4.toUpperCase()
// console.log(string4)

// string4 = string4.toLowerCase()
// console.log(string4)

// slice -->

// let str = "hello"
// console.log(str .slice(0,3))

// start at 1 -> E
// stop at 3 -> but don't include 3
// E - 1 , L - 2


// split letter -->

// let str = "hello"
// console.log(str .split(""))

let text = "This is JavaScript"
console.log(text .split(" "))
