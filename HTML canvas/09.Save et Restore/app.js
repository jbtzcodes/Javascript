let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


//  Save(); sauvegarde les pro propriétées de la forme | saves the pro properties of the shape
// Restor(); donne a la forme qui suit les proprietées du save |  gives the following form the properties of the save
function init(){
ctx.fillRect(0,0,150,150);
ctx.save();
ctx.fillStyle = 'red';
ctx.save();
ctx.fillRect (15,15,120,120)
ctx.fillStyle = 'blue';
ctx.fillRect (30,30,90,90);
ctx.restore();
ctx.fillRect(45,45,60,60)
}
init();