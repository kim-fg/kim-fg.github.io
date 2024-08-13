let canvas = null; 
let context = null;

let width = 0; 
let height = 0;

let columns = 0;
let yPositions = [];

window.onload = () => {
    canvas = document.getElementById("matrix");
    context = canvas.getContext("2d");

    width = canvas.width = document.body.offsetWidth;
    height = canvas.height = document.body.offsetHeight;

    context.fillStyle = "#000"
    context.fillRect(0, 0, width, height);

    columns = Math.floor(width / 20) + 1;
    yPositions = Array(columns).fill(0);

    setInterval(matrix, 100);
};

function matrix() {
    context.fillStyle = "#0001";
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = "#0f0";
    context.font = "15pt monospace";

    yPositions.forEach((y, i) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = i * 20;
        
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
            yPositions[i] = 0;
        } else {
            yPositions[i] = y + 20;
        }
    });
}