const urlRequest = 'https://randomuser.me/api/?results=12&nat=us,ca';
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');

//Search section elements
const searchDiv = document.querySelector('.search-container');
searchDiv.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-submit');

//DRY function for creating elements
  const elementCreate = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}





async function shortCutRequest(url) {
  try {
    const request = await fetch(url);
    return await request.json();
  }
  catch (error){
    gallery.innerHTML = `An error occured fetching the data, ${error}`;
  }
}

async function fetchRequest(url) {
  try {
    const response = await shortCutRequest(url);
    const employeeResponse = response.results.forEach(async (user) => {

  //display randomuser section
      const containerDiv = elementCreate('div', 'className', 'card');
      galleryDiv.appendChild(containerDiv);
      containerDiv.innerHTML = `<div class="card-img-container">
          <img class="card-img" src=${user.picture.large} alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
          <p class="card-text">${user.email}</p>
          <p class="card-text cap">${user.location.city}</p>
      </div>`;

        containerDiv.addEventListener('click', () =>{
          modalWindow(user);
      })
      searchButton.addEventListener('click', (e) =>{
        if(searchInput.value === user.name.first || searchInput.value === user.name.last){
          containerDiv.style.display = 'inline';
        }else {
          containerDiv.style.display = 'none';
        }
      })
      body.addEventListener('keyup', () =>{
        const cards = document.querySelectorAll('.card');
        if(searchInput.value === ''){
        cards.forEach(card => {
          card.style.display = 'flex';
        })
      }
      })
      })
  }
  catch(error) {
    gallery.innerHTML = `An error occured getting employee profile, ${error}`;
  }

}

const modalWindow = (data, i) =>{

  const modalContainer =  elementCreate('div', 'className', 'modal-container');
  body.appendChild(modalContainer);
  modalContainer.innerHTML = `<div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
      <img class="modal-img" src=${data.picture.large} alt="profile picture">
      <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
      <p class="modal-text">${data.email}</p>
      <p class="modal-text cap">${data.location.city}</p>
      <hr>
      <p class="modal-text">${data.phone}</p>
      <p class="modal-text">${data.location.street} ${data.location.city} ${data.location.state}</p>
      <p class="modal-text">Birthday: ${data.dob.date}</p>
      </div>
  </div>

  // Prev & next button section
  <div class="modal-btn-container">
      <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
      <button type="button" id="modal-next" class="modal-next btn">Next</button>
  </div>`;
  const close = document.getElementById('modal-close-btn');
  close.addEventListener('click', () =>{
    modalContainer.remove();
  })
  const modals = document.querySelectorAll('.modal-container');
  const employee = document.querySelectorAll('.card');

  const prevButton = document.querySelector('#modal-prev');
  const nextButton = document.querySelector('#modal-next');

  prevButton.addEventListener('click', () =>{

  });

   nextButton.addEventListener("click", () => {

})
}








fetchRequest(urlRequest);
