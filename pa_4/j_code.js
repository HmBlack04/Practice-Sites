
    /*
    Credits: 

    Much of this code was inspired from the W3 schools canvas section on line graphs
    ChatGPT was helpful to identify an error with the fill style object which needed an assignment, not a function call.
    Dash, helped with the conditionals
    additional help with some of the CSS came from MDN Web Docs by Mozilla
    */
const canvas1 = document.getElementById("hangman");
const ctx = canvas1.getContext("2d");
canvas1.height = canvas1.width;
ctx.fillStyle = "#FF0000"; // ChatGPT Corrected the assignment here
ctx.transform(1, 0, 0, -1, 0, 400);


function drawLine(ctx1, startX, endX, startY, endY)
{
    ctx1.moveTo(startX, startY);
    ctx1.lineTo(endX, endY);
    ctx1.strokeStyle = "brown";
    ctx1.lineWidth = 10;
    ctx1.stroke();
}

function drawBody(ctx2, num_wrong)
{
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 5;

    if(num_wrong == 1)//draw head
    {
        ctx2.beginPath();
        ctx2.ellipse(255, 275, 25,25, 0,0, Math.PI *2);
        ctx2.stroke();
    }
    else if (num_wrong == 2)//draw body
    {
        ctx2.moveTo(255, 250);
        ctx2.lineTo(255, 150);
        ctx2.stroke();
    }
    else if (num_wrong <= 4)//draw each leg
    {
        if(num_wrong == 3) {i = -1}
        else {i = 1}
        ctx2.moveTo(255, 150);
        ctx2.lineTo(255 + i*25, 75);
        ctx2.stroke();

    }
    else if (num_wrong == 5 || num_wrong == 6)//draw both arms
    {
        if(num_wrong == 5) {i = -1}
        else {i = 1}
        ctx2.moveTo(255, 200);
        ctx2.lineTo(255 + i*50, 225);
        ctx2.stroke();
    }
    if (num_wrong == 6){alert('You loose!');}

}

function drawGame() {
    drawLine(ctx, 20, 200, 50, 50);
    drawLine(ctx, 110, 110, 50, 350);
    drawLine(ctx, 105, 255, 350, 350);
    drawLine(ctx, 255, 255, 355, 300);  
}
var total_wrong = 0;

function addPart()
{
    total_wrong = total_wrong+1;
    drawBody(ctx, total_wrong);
}

document.getElementById("add").addEventListener("click", addPart);