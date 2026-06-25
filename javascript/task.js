const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

setTimeout(() => {
    popup.style.display = "block";
}, 2000);

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});