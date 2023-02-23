// keyframes permet d'animer plusieurs fois un element en utilisant qu'un seul animation.


gsap.to('img:nth-child(1)', {keyframes: [
  {duration: 0.3, y: 100},
  {duration: 0.3, scale: 1.3},
  {duration: 0.3, y: 200},
]})

// cela est tres pratique pour les timelines