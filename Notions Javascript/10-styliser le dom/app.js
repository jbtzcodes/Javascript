const title1 = document.querySelector('h1')
const title2 = document.querySelector('h2')
const box = document.querySelector('.box')
const liste = document.querySelector('ul')
const img = document.querySelector('img')
const input = document.querySelector('#test')
const form = document.querySelector('form')



// innerText = permet dajouter du texte
title1.innerText = `Je suis du texte ajouter`

// textContent = permet d'ajouter du texte
title2.textContent = `Je suis un texte`

// innerHTML = pour ajouter du html
box.innerHTML = `<p> Hello les devs </p>`

// créerdes elements html
let newLI = document.createElement('li');
newLI.innerText = "Nouvelle LI";
liste.appendChild(newLI)

// replaceWith = pour choisir l'ordre de mon element
liste.children[1].replaceWith(newLI)

// style
box.style.background = "#333"


// acceder aux attributs
img.src = `https://images.unsplash.com/photo-1669880210910-57960a74e1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80`;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let val = input.value;
  console.log(val);
  title1.innerText = `${val}`
})



// recuperer les coordonnées de la souris

const cor = document.querySelector('.cor')

let y = 0;
let x = 0;

window.addEventListener('mousemove', (even)=> {
  x = even.clientX;
  y = even.clientY;

  cor.textContent = `X : ${x} Y: ${y}`

})