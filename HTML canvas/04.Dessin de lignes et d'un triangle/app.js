let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



// dessin libre
ctx.beginPath();
// Démarre de | start to
ctx.moveTo(75,50);
//  jusqua | to
ctx.lineTo(100,75);
//  jusqua | to
ctx.lineTo(100,25);
//  jusqua | to
ctx.lineTo(75,50);
//  contour
ctx.stroke()
// Remplissage
ctx.fill()
