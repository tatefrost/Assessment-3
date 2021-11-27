let randomBtn = document.querySelector('#randBtn');

let getRest = evt => {
  evt.preventDefault();
  
  const restaurants = ['Olive garden', 'Burger supreme', 'Zupas', 'Greek n\' go']
  const random = Math.floor(Math.random() * restaurants.length);
  alert(random, restaurants[random])
}

randomBtn.addEventListener('click', getRest)

//did not get random restaurant to work 