const btn = document.querySelector('.btn')
const liste = document.querySelector('.liste')


btn.addEventListener('click', ()=> {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    for(i = 0; i < data.length; i++){
      let newLi = document.createElement("li");
      let newTitle = document.createElement('h2')
            let newText = document.createElement('p')

            newTitle.innerText = data[i].title
            newText.innerText = data[i].body

            newLi.appendChild(newTitle)
            newLi.appendChild(newText)

            liste.appendChild(newLi)
    }
  })
})