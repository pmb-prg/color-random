const choises = ["rock", "paper", "scissors"];
const choose = prompt("choss rock, paper and scissors");
let random = Math.floor(Math.random() * 3);
const robot = choises[random];

if (choose) {
    if (choose === robot) {
        alert("Equal");
    } else if (choose == "rock") {
        if (robot == "paper") {
            alert("You Lost :(");
        } else {
            alert("You Win :)");
        }
    } else if (choose == "paper") {
        if (robot == "rock") {
            alert("You Win :)");
        } else {
            alert("You Lost :(");
        }
    } else if (choose == "scissors") {
        if (robot == "rock") {
            alert("You Lost :(");
        } else {
            alert("You Win :)");
        }
    } else {
        alert("Error")
    }


} else {
    console.log("You cheated!");
}

console.log(`robot select: ${robot}`);
console.log(`Your choose: ${choose}`);