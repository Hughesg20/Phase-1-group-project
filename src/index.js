const BaseUrl = "http://localhost:3000/restaurants"

loadRestaurants()


function loadRestaurants(){
  fetch(BaseUrl)
  .then(res =>res.json())
  .then(restArray => restArray.forEach(makeSpan))
}



function makeSpan(restObj){
  const restSpan = document.createElement('span')
  restSpan.innerText = restObj.name

  const restBar = document.getElementById('restaurant-bar')
  restBar.appendChild(restSpan)

  restSpan.addEventListener('click', () => {
    document.getElementById('name').innerText = restObj.name
    document.getElementById('description').innerText = restObj.Description
    document.getElementById('type').innerText = restObj.type
    document.getElementById('rating').innerText = restObj.rating
  })


}