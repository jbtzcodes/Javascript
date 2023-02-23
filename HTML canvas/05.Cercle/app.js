let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



// dessin libre | free drawing
ctx.beginPath();
//  cercle | circle
ctx.arc(75,75,50,  0,2 * Math.PI);
ctx.fillStyle = 'red'
ctx.fill();