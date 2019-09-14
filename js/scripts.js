const urlRequest = 'https://randomuser.me/api/?results=12';
const urlIndividual = 'https://randomuser.me/api';
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');

/*const elementCreate = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}*/

async function shortCutRequest(url) {
  try {
    const request = await fetch(url);
    return await request.json();
  }
  catch {

  }
}


async function fetchReques(url) {

  const response = await shortCutRequest(url);
  console.log(response);
  const employeeResponse = response.results.map(user => {


    //const containerDiv = elementCreate('div', 'class', 'card');
    //const imageDiv = elementCreate('div', 'class', 'card-img-container');
    //const infoDiv = elementCreate('div', 'class', 'card-info-container');
    const containerDiv = document.createElement('div');
    const imageDiv = document.createElement('div');;
    const infoDiv = document.createElement('div');;
    containerDiv.classList.add('card');
    imageDiv.classList.add('card-img-container');
    infoDiv.classList.add('card-info-container');
    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(infoDiv);
    galleryDiv.appendChild(containerDiv);

    imageDiv.innerHTML = `<img class="card-img" src=${user.picture.large} alt="profile picure">`;
    infoDiv.innerHTML = `<h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
      <p class="card-text">${user.email}</p>
      <p class="card-text cap">${user.location.city}</p>`;
  });
}


async function modelWindow(url) {
  const perInfoRequest = await shortFetchRequest(url);

  const perInfoResponse = perUserFetch.results.map(user => {

const greatGranpaModal = document.createElement('div');
const granpaModal = document.createElement('div');
const button = document.createElement('button');
const fatherModal = document.createElement('div');
greatGranpaModal.classList.add('modal-container');
granpaModal.classList.add('modal');
button.classList.add('modal-close.btn');
fatherModal.classList('modal-info-container');
body.appendChild(greatGranpaModal);
greatGranpaModal.appendChild(granpaModal);
granpaModal.appendChild(button);
granpaModal.appendChild(fatherModal);

button.innerHTML = `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
fatherModal.innerHTML = `<img class="modal-img" src=${user.picture.large} alt="profile picture">
<h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
<p class="modal-text">${user.email}</p>
<p class="modal-text cap">${user.location.city}</p>
<hr>
<p class="modal-text">${user.phone}</p>
<p class="modal-text">${user.location.street} ${user.location.city} ${user.location.state}</p>
<p class="modal-text">Birthday: ${user.dob.date}</p>`;

})
}

window.addEventListener('click', (e) => {
  if(e.target.CLASSNAME === 'modal-container'){
    modelWindow(urlIndividual);
  }
});
fetchReques(urlRequest);
