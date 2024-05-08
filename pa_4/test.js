
const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#00AA00";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height);

let xMax = canvas.height;
let slope = 1.2;
let intercept = 70;

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "green";
ctx.stroke();

function f(x){
    return slope*x +intercept;
}