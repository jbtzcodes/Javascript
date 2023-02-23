let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



// Font
ctx.font = '40px serif';
// Contour texte | outline text
// ctx.strokeText('hello',40, 80);
// Changer couleur | change color
ctx.fillStyle = 'red'
// Remplissage texte | text fill
ctx.fillText('hello',40, 80);