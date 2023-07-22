const key = document.getElementById("key");
const body = document.querySelector("body");
const color = document.querySelector(".color");




key.addEventListener("click", function() {
    let random = Math.random() * 999999;
    let round = Math.floor(random);
    let random2 = Math.random() * 999999;
    let round2 = Math.floor(random2);
    body.style.background = `linear-gradient(to left, #${round}, #${round2})`;
    color.innerText = `#${round} #${round2}`;


})