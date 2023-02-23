// 1) La méthode to permet d'animer un element d'un point A à un point B.C'esta dire quil va prendre la position de la ou on la placer dans le DOM vers un nouveau point que l'ont va definire. Ca peut etre une position, une couleur, une taille etc...

// on selectionne notre element
const img = document.querySelector("img");
console.log(img);

// ensuite on utilise l'objet GSAP qui possède plusieurs méthode de timeline etc. Tout ce que nou spourrons faire vient de cette objet. On lui applique la méthode to qui va avoir deux parametres.Premier argument est notre selection que ce que l'ont veut animer.Le deuxieme argument est un objets qui va animer nos propriété.

// on voit que cette méthode à une durée qui est de 0.5s de base. on peut changer ceci avec duration:

// gsap.to(img, {x: 100, y: 200, duration: 2} )

// x represente l'axe horizontal et y l'axe vertical il utilise transform: translate3D sous le capot

// on peut mettre toute sorte de propriete CSS come ici scale
// gsap.to(img, { x: 100, y: 200, duration: 2, scale: 2 });

//  Nous pouvons appliquer des animations sans créer de variable
// changeons la couleur de mon h1 sans créerde constante
gsap.to("h1", { color: "orange", font: "10px", duration: 2 });

// GreenSock possède quelques spécificités. Les proprietes comme background-color doit etre ecrit en CamelCase ex: backgroundColor.
