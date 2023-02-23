

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillRect(50,50,100,100);
// contour rectangle | rectangle outline
ctx.strokeRect(50,50,100,100);
// changer la couleur | change color
ctx.fillStyle = 'rgba(200,0,0,0.5)'
// gome | rubber
// ctx.clearRect(0,0, 900,300)
