let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.lineWidth = 10;

ctx.strokeRect(10, 10, 260, 260)

for (let i = 25; i<=225; i+=40){
    for(let j = 25; j<=225; j+=40){
    ctx.fillRect(i,j, 30, 30)
    }
}