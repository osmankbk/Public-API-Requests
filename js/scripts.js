const urlRequest = 'https://randomuser.me/api/?results=12&nat=us,ca';
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');


//DRY function for creating elements
  const elementCreate = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}
//fetch
async function fetchRequest(url) {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return Promise.all(response.results);
  }
  catch (error){
    gallery.innerHTML = `An error occured fetching the data, ${error}`;
  }
}

//Search section elements
const searchDiv = document.querySelector('.search-container');
searchDiv.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
</form>`;
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('serach-submit');


const employeesInfoRequest = (data) =>{
    data.forEach(user => {
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

  const modalContainer =  elementCreate('div', 'className', 'modal-container');
  body.appendChild(modalContainer);
  modalContainer.innerHTML = `<div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
      <img class="modal-img" src=${user.picture.large} alt="profile picture">
      <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
      <p class="modal-text">${user.email}</p>
      <p class="modal-text cap">${user.location.city}</p>
      <hr>
      <p class="modal-text">${user.phone}</p>
      <p class="modal-text">${user.location.street} ${user.location.city} ${user.location.state}</p>
      <p class="modal-text">Birthday: ${user.dob.date}</p>
      </div>
  </div>
  <div class="modal-btn-container">
      <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
      <button type="button" id="modal-next" class="modal-next btn">Next</button>
  </div>`;
  modalContainer.style.display = 'none';

// Modal Window
  containerDiv.addEventListener('click', (e) =>{
    modalContainer.style.display = 'block';

  })

//Modal Close Button
  modalContainer.addEventListener('click', (e) =>{
    const modalContainers = document.querySelectorAll('.modal-container');
    if(e.target.className === '.modal-close-btn' || e.target.textContent === 'X'){
      modalContainers.forEach(modal =>{
        modal.style.display = 'none';
      })
    }
  })

//Search Button
  searchButton.addEventListener('click', (e) =>{
    if(searchInput.value === user.name.first || searchInput.value === user.name.last){
      containerDiv.style.display = 'flex';
    }else {
      containerDiv.style.display = 'none';
    }

  });

//Restore all cards
  body.addEventListener('keyup', () =>{
    const cards = document.querySelectorAll('.card');
    if(searchInput.value === ''){
    cards.forEach(card => {
      card.style.display = 'flex';
    })
  }
  });

return data;
})
}




const modalInteraction = (data) =>{
  const cards = document.querySelectorAll('.card');
  const modalContainers = document.querySelectorAll('.modal-container');
  const prevButtons = document.querySelectorAll('.modal-prev');
  const nextButtons = document.querySelectorAll('.modal-next');
  const arrayOfModals = [...modalContainers];
  let counter = 0;
  const arrayOfPrevButtons = [...prevButtons];
console.log(modalContainers);

//Previous button
modalContainers.forEach((modal, i) =>{
  modal.addEventListener('click', (e) =>{
    if(e.target.className === 'modal-prev btn'){
    modal.style.display = 'none';
    modal.previousElementSibling.style.display = 'block';
    if(i === 0){
      e.target.style.display = 'none';
    }

  } else {
    if(e.target.className === 'modal-next btn'){
    modal.style.display = 'none';
    modal.nextElementSibling.style.display = 'block';
} if(i === 11){
  e.target.style.display = 'none';
}
  }
})
})
}


fetchRequest(urlRequest)
.then(employeesInfoRequest)
.then(modalInteraction);
