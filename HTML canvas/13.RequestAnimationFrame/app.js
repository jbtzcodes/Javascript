let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

})

// Animation sur x | animation x
var x = 200;
// vitesse animation | speed animation
var v = 5;
function init(){
 requestAnimationFrame(init);
//  Permet d'effacer les images imprimer | Allows you to erase printed images
 ctx.clearRect(0,0,innerWidth, innerHeight);
//  Formes
ctx.beginPath();
ctx.arc(x,200,60,0,Math.PI * 2);
ctx.strokeStyle = 'crimson';
ctx.stroke();
ctx.arc(x,100,30,0,Math.PI * 2);
ctx.fill()
// Créé un mouvement sur x grace a la var x=200 | Create a movement on x thanks to the var x=200
// Rebondire sur les coter | Bounce to the sides
if(x + 60 > innerWidth || x - 60 < 0){
v = - v;}
// vitesse de l'animation | speed animation
x+=v;}
init();