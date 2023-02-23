let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})




function init(){
    // Origine de rotation | Rotation origin
    ctx.beginPath();
    // Permet de faire ces calcule en degrée car de base il est en radiant | Allows you to calculate in degrees because the base is in radiants
    ctx.arc(150,150,1,0, 2 * Math.PI);
    ctx.stroke();
    ctx.translate(150,150)
    // Permet de definir un point de rotation | Allows you to define a point of rotation
    ctx.rotate(180 * Math.PI / 180);
    ctx.fillRect(50,50,100,50);
}
init();