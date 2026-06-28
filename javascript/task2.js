// Heading Event

let heading = document.getElementById("heading");

console.log(heading);

heading.onclick = function () {
    alert("Don't click ");
};

// Form Event

let form1 = document.getElementById("form");

form1.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form Submitted");

    console.log("Name :", document.getElementById("name").value);
    console.log("Mobile :", document.getElementById("number").value);
    console.log("Email :", document.getElementById("email").value);

});

// RGB Color Changer

let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

let redValue = 128;
let greenValue = 128;
let blueValue = 128;

red.addEventListener("input", function (event) {
    redValue = event.target.value;
    applyColor();
});

green.addEventListener("input", function (event) {
    greenValue = event.target.value;
    applyColor();
});

blue.addEventListener("input", function (event) {
    blueValue = event.target.value;
    applyColor();
});

function applyColor() {

    document.getElementById("element2").style.backgroundColor =
        `rgb(${redValue}, ${greenValue}, ${blueValue})`;

}

applyColor();