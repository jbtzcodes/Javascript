let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})


var x = 200;
var y = 200;


function init(){

 requestAnimationFrame(init);
//  Permet d'effacer les images imprimer
 ctx.clearRect(0,0,innerWidth, innerHeight);
//  Formes
ctx.beginPath();
ctx.arc(x,y,60,0,Math.PI * 2);
ctx.strokeStyle = 'crimson';
ctx.stroke();


canvas.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;

})
}


init();