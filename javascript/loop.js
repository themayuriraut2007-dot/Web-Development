// While Loop -->


// Factorial

// let number = 5
// let fact = 1

// while (number != 0){
//     fact = fact * number //5 , 4//20 , 3//60,2//120,1//120,0
//     number--
// }

// console.log(fact)


//  let count = 0;

// while (count<=10) {
//     console.log(count+count)
//     count++
// }


// Table Create 

// let i = 1;
// let num = 3
// while(i<=10) {
//    console.log(i*num)
//    i++
// }


// Square 

// let i = 3;
// while(i<=10) {
//    console.log(i*i)
//    i++
// }




// Do While Loop -->


//Even number 

// let i= 1;
//  do {
//    if(i%2==0)
//    console.log(i)
//    i++
//  }
//  while(i<=40)



// do {

//     let year = Number(window.prompt("enter year !"))

//     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//         console.log('year leap !')
//     } else {
//         console.log("not a leap year !")
//     }

//     choice = confirm("do you wish to continue !")

// }while(choice)



// For Loop -->

// let i = 1;
// for(i=1;i<=40;i++)
// {
//    if(i%2!=0)
//    console.log(i)
// }


//Sum of Digits

// let sum=0;
// let number=1234

// while(number!=0) {
//    d=number%10;
//    sum=sum+d;
//    number=parseInt(number/10);
// }
// console.log(sum)



// Using for loop 

// let sum=0;

// for(number= 1;number<=20;number++)
// {
//    console.log(number)
//    sum=sum+number

// }
// console.log("total sum : ",sum)



// reverse

// let rev=0;
// let number=1234

// while(number!=0) {
//    d=number%10;
//    rev=rev*10+d
//    number=parseInt(number/10);
// }
// console.log(rev)



// Using for loop

// let rev=0;
// for(let number=1;number<=5;number++)
// {
//    console.log(number)
//    rev=rev*10+number;
// }
// console.log(rev)


// let result = " ";
// for (let i=5;i>=1;i--) {
//      result = result +i;
// }
// console.log(result)
   


// Leap year

// let start = 2000;
// let end = 2030;
// let sum = 0;

// for(year=start;year<=end;year++) {
//      if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//           console.log(year);
//           sum = sum + year
//      }
// }
// console.log("sum of leap years = ",sum)



// let start =Number(window.prompt("Enter start year"))
// let end = Number(window.prompt("Enter start year"))
// let sum =0 

// for(year=start;year<=end;year++) {
//      if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//           console.log(year);
//           sum = sum + year
//      }
// }
// console.log("sum of leap years = ",sum)



// Nested loop -->

let row = 0

while (row < 7) {
    let empty = 0
    let column = 0
    let paternString = ""
    let emptyString = ""

    while (empty < (6 - row)) {
        emptyString += "<span>&nbsp;&nbsp<span>"
        empty++
    }
    while (column <= row) {
        paternString += " * "
        column++
    }
    document.write(emptyString + paternString)
    document.write("<br></br>")
    row++
}