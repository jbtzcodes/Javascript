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
    ctx.translate(50,50)
    // Tout les élément qui suit seront sous le translate  | All the elements that follow will be under the translate
    ctx.fillRect(0,0,100,150);
    ctx.fillRect(100,100,100,150);
    // SetTransform renisialise les parametre du translate | SetTransform resets the parameters of the translate
    ctx.setTransform(1,0,0,1,0,0)
    ctx.fillRect(0,0,100,150);
}
init();