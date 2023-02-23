const btnD = document.querySelectorAll('.btn-droit')
const btnG = document.querySelectorAll('.btn-gauche')
const body = document.querySelector('.global')
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')

let index = 1;

const downSlide = () => {

    const sortie = gsap.timeline();

    sortie.to(`.img${index}`, {opacity: 0, y: -100, duration: 0.45})
    sortie.to(`.t${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.25')
    sortie.to(`.titre${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.25')
    sortie.to(`.btng${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie.to(`.btnd${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie.to(`.btn${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie.to(`.page${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.55')
    sortie.to(body, {duration: 1,ease: "power1.in", x: '-=100vw'}, '-=0.95')

    const entrer = gsap.timeline();

    entrer.fromTo(`.img${index+1}`,{opacity:0, y: -100},  {opacity: 1, y:0, duration: 0.45, delay: 1})
    entrer.fromTo(`.t${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer.fromTo(`.titre${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer.fromTo(`.btng${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.35')
    entrer.fromTo(`.btnd${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.35')
    entrer.fromTo(`.btn${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.35')
    entrer.fromTo(`.page${index+1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.45')



}
const upSlide = () => {

    const sortie2 = gsap.timeline();

    sortie2.to(`.img${index}`, {opacity: 0, y: -100, duration: 0.45})
    sortie2.to(`.t${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.25')
    sortie2.to(`.titre${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.25')
    sortie2.to(`.btng${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie2.to(`.btnd${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie2.to(`.btn${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.35')
    sortie2.to(`.page${index}`, {opacity: 0, y: -100,duration: 0.45}, '-=0.55')
    sortie2.to(body, {duration: 1, x: '+=100vw'}, '-=0.75')

    const entrer2 = gsap.timeline();

     entrer2.fromTo(`.img${index-1}`,{opacity:0, y: -100},  {opacity: 1, y:0, duration: 0.45, delay: 0.75})
    entrer2.fromTo(`.t${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer2.fromTo(`.titre${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.35')
    entrer2.fromTo(`.btng${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer2.fromTo(`.btnd${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer2.fromTo(`.btn${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')
    entrer2.fromTo(`.page${index-1}`,{opacity:0, y: -100}, {opacity: 1, y:0, duration: 0.45}, '-=0.25')

}





// Boutons
btnD.forEach(btn => {
    btn.addEventListener('click', (function(){
        if(index === 4 ){
            btn.classList.add('animation-btn-fin-droit')
            setTimeout(() => {
                btn.classList.remove('animation-btn-fin-droit')
            }, 500)
        }
        if(index < 4) {
            downSlide();
            index++;
        }
    })
)}) 

btnG.forEach(btn => {
    btn.addEventListener('click', (function(){
        if(index === 1 ){
            btn.classList.add('animation-btn-fin-gauche')
            setTimeout(() => {
                btn.classList.remove('animation-btn-fin-gauche')
            }, 500)
        }
        if(index > 1) {
            upSlide();
            index--;
        }
    })
)})     
   