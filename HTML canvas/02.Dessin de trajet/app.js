let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// Dessin libre | free drawing
ctx.beginPath();
// Taille bordure | outline size
ctx.lineWidth = "8";
// Contour couleur | Change color
ctx.strokeStyle = "green";
// Forme rectangle
ctx.rect(50,50,50,50);
// Contour | outline
ctx.stroke();
// Remplissage | Filling
ctx.fill() 
// Couleur bordure | outline color
ctx.strokeStyle = 'red'
