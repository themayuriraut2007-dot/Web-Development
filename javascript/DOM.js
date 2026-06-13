// console.log("hello World")


// Selected With Id -- >

// document.getElementBYId(" ")

// let heading = document.getElementById("heading"); 
// console.log(heading);

// we also use log ke bdle dir (object)




// Selected With Class -->

// document.getElementsByClassName("")

//let headings = document.getElementsByClassName("heading3-class");
//console.log(heading);



// Selected With Tags -->

// document.getElementsByTagName("p")



//Query Selector -->

// document.querySelector("myId/myClass/tag")
// return first element


// document.querySelectorAll("myId/myClass/tag")
// return a node list

// let elements = document.querySelector("p");
// console.log(elements);

// let elements = document.querySelectorAll("p");
// console.log(elements);

// let elements = document.querySelectorAll(".heading3-class");
// console.log(elements);


// innerText And innerHTML-->

let div = document.querySelector("div");
console.log(div);




//   let target = document.getElementById("redbox").style.backgroundColor = "red";

//   document.querySelector(".container").style.backgroundColor = "green";






// querySelectorery("h1");
// h1.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);


// // Append(last add) -->

// let div = document.querySelector("div")
// div.append(newBtn)

// same prepend(starting mai)




// Create new heading -->

//let newHeading =  document.createElement("h1");
// newHeading.innerHTML = "<i> Hi , I am new! </i>";

// document.querySelector("body").prepend(newHeading); 



// Delete Element -->

// let h1 = document.qu


//Practice Questions -->

// Q1] create a new button element. Give it a text "click me", background 
// color of red & text color of white.

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);



// Q2] create a <p> tag in html,give it a class and some styling.

// we use classList

 let para = document.querySelector("p");
 para.classList.add("newClass");

 // also we remove 
//  para.classList.remove("newClass");



