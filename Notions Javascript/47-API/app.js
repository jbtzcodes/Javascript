const btn = document.querySelector('.btn')
const liste = document.querySelector('.liste')


btn.addEventListener('click', ()=> {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = 'json'
  xhr.onload = function(){
    console.log(xhr.response);
    for(i = 0; i < xhr.response.length; i++){


      let newLi = document.createElement('li')
      let newTitle = document.createElement('h2')
      let newText = document.createElement('p')

      newTitle.innerText = xhr.response[i].title
      newText.innerText = xhr.response[i].body

      newLi.appendChild(newTitle)
      newLi.appendChild(newText)

      liste.appendChild(newLi)




    }
  };
  xhr.send()
})