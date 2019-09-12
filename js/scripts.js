const urlRequest = 'https://randomuser.me/api/?results=12';
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');





async function fetchRequest(url) {
  const request = await fetch(url);
  const response = await request.json();

  const employeeResponse = response.results.map(user => {
    console.log(user);

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
/*const elementCreate = (elementName, property, value) => {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}*/

const modelWindow = () => {
const greatGranpaModal = document.createElement('div');
const granpaModal = document.createElement('div');
const button = document.createElement('button');
const fatherModal = document.createElement('div');
greatGranpaModal.classList.add('modal-container');
granpaModal.classList.add('modal');
button.classList.add('modal-close.btn');
greatGranpaModal.appendChild(granpaModal);
granpaModal.appendChild(button);
granpaModal.appendChild(fatherModal);
button.innerHTML = `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
fatherModal.innerHTML = `<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
<h3 id="name" class="modal-name cap">name</h3>
<p class="modal-text">email</p>
<p class="modal-text cap">city</p>
<hr>
<p class="modal-text">(555) 555-5555</p>
<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
<p class="modal-text">Birthday: 10/21/2015</p>`;

}
console.log(fetchRequest(urlRequest));
