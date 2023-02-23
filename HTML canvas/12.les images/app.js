let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Créer un objet image | create an object
var img = new Image();
img.src = 'https://source.unsplash.com/random';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    ctx.drawImage(img, 50, 50);
})
// Afficher l'image 
function init(){
img.addEventListener('load', function (){
    ctx.drawImage(img, 50, 50);
})
}
init();