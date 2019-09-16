const urlRequest = 'https://randomuser.me/api/?results=12';
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
const searchDiv = document.querySelector('.search-container');

//DRY function for creating elements
  const elementCreate = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}

//Search section elements
const form = document.createElement('form');
const input = elementCreate('input', 'className', 'search-input');
const secondInput = elementCreate('input', 'className', 'search-submit');
form.action = "#";
form.method = "get";
input.type = 'search';
input.placeholder = "Search...";
secondInput.type = 'submit';
form.appendChild(input);
form.appendChild(secondInput);
searchDiv.appendChild(form);

async function shortCutRequest(url) {
  try {
    const request = await fetch(url);
    return await request.json();
  }
  catch {

  }
}


async function fetchRequest(url) {

  const response = await shortCutRequest(url);
  const employeeResponse = response.results.forEach(user => {

//display randomuser section
    const containerDiv = elementCreate('div', 'className', 'card');
    const imageDiv = elementCreate('div', 'className', 'card-img-container');
    const infoDiv = elementCreate('div', 'className', 'card-info-container');

    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(infoDiv);
    galleryDiv.appendChild(containerDiv);

    imageDiv.innerHTML = `<img class="card-img" src=${user.picture.large} alt="profile picure">`;
    infoDiv.innerHTML = `<h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
      <p class="card-text">${user.email}</p>
      <p class="card-text cap">${user.location.city}</p>`;

//modal window section
      containerDiv.addEventListener('click', (e) => {

        const modalContainer =  elementCreate('div', 'className', 'modal-container');
        const modal = elementCreate('div', 'className', 'modal');
        const modalInfo = elementCreate('div', 'className', 'modal-info-container');
        const modalButtonContainer = elementCreate('div', 'className', 'modal-btn-container');
        const modalPrevButton = elementCreate('button', 'className', 'modal-prev btn');
        const modalNextButton = elementCreate('button', 'className', 'modal-next btn');
        const modalCloseButton = elementCreate('button', 'className', 'modal-close-btn');

        body.appendChild(modalContainer);
        modalContainer.appendChild(modal);
        modalContainer.appendChild(modalButtonContainer);
        modalButtonContainer.appendChild(modalPrevButton);
        modalButtonContainer.appendChild(modalNextButton);
        modal.appendChild(modalCloseButton);
        modal.appendChild(modalInfo);
        modalPrevButton.textContent = 'Prev';
        modalNextButton.textContent = 'Next';
        modalCloseButton.innerHTML = `<strong>X</strong>`;
        modalInfo.innerHTML = `<img class="modal-img" src=${user.picture.large} alt="profile picture">
        <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="modal-text">${user.email}</p>
        <p class="modal-text cap">${user.location.city}</p>
        <hr>
        <p class="modal-text">${user.phone}</p>
        <p class="modal-text">${user.location.street} ${user.location.city} ${user.location.state}</p>
        <p class="modal-text">Birthday: ${user.dob.date}</p>`;
        modalCloseButton.addEventListener('click', (e) => {
          modalContainer.remove();
        })

//Next & prev button section
        modalNextButton.addEventListener('click', (e) =>{
          
        })

        modalPrevButton.addEventListener('click', () =>{

        })

      })
//search user section
    secondInput.addEventListener('click', (e) =>{

      if(input.value === user.name.first || input.value === user.name.last){
        containerDiv.style.display = 'inline';
      } else {
        containerDiv.style.display = 'none';
      }
    })
  })
};






fetchRequest(urlRequest);
