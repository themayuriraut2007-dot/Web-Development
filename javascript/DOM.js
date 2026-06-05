console.log("hello World")

// document.getElementById("redbox").style.backgroundColor = "red"




// document.querySelector(".box").style.backgroundColor = "green";

// Ek hi select hoga querySelector mai(Single Element Return karta hai) 




// Agar pure karne hai to use this querySelectorAll(multiple element return krta hai)

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
   e.style.backgroundColor = "green"
})




// document.getElementsByTagName("div")
//  it returns html collection


