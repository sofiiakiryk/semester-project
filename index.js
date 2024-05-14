function showSelectedCountry() {
  const select = document.getElementById('country-select');
  const selectedOption = select.options[select.selectedIndex].text;
  document.getElementById('selected-country').innerHTML =
    'You selected: ' + selectedOption;
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function searchEvents() {
  let input,
    filter,
    events,
    event,
    description,
    i,
    txtValue,
    found = false;
  input = document.getElementsByClassName('search');
  filter = input.value.toUpperCase();
  events = document.querySelectorAll('.event1');
  for (i = 0; i < events.length; i++) {
    event = events[i];
    description = event.querySelector('.describtion');
    txtValue = description.textContent || description.innerText;
    if (txtValue.charAt(0).toUpperCase() === filter && !found) {
      event.style.display = '';
      found = true;
    } else {
      event.style.display = 'none';
    }
  }
}

async function fetchCountries() {
  const url =
    'https://app.ticketmaster.com/discovery/v2/venues.json?apikey=rZqtteSLhuvkjk3nBGrEH0B1vTkue4Ap';

  try {
    const response = await fetch(url);
    const data = await response.json();

    const countries = data._embedded.venues.map(
      venue => venue.country.countryCode
    );

    const selectElement = document.getElementById('country-select');
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

window.addEventListener('load', fetchCountries);

async function fetchEvents() {
  const url =
    'https://app.ticketmaster.com/discovery/v2/events.json?apikey=rZqtteSLhuvkjk3nBGrEH0B1vTkue4Ap';

  try {
    const response = await fetch(url);
    const data = await response.json();

    const events = data._embedded.events;
    const eventContainers = document.querySelectorAll('.event1');

    events.forEach((event, index) => {
      const imageURL = event.images[0].url;

      eventContainers[index].querySelector('img').src = imageURL;
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

window.addEventListener('load', fetchEvents);

document.addEventListener('DOMContentLoaded', function () {
  const eventImages = document.querySelectorAll('.event1 img');

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalDate = document.getElementById('modal-date');
  const closeButton = document.querySelector('.close');

  eventImages.forEach(function (image) {
    image.addEventListener('click', function () {
      const description =
        this.nextElementSibling.querySelector('.describtion').innerText;
      const date = this.nextElementSibling.querySelector('.date').innerText;
      const imageUrl = this.src;

      modalImage.src = imageUrl;
      modalDescription.textContent = description;
      modalDate.textContent = date;

      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
async function fetchEventsByCountry(countryCode) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=rZqtteSLhuvkjk3nBGrEH0B1vTkue4Ap`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const events = data._embedded.events;
    const eventContainers = document.querySelectorAll('.event1');

    eventContainers.forEach(event => {
      event.style.display = 'none';
    });

    events.forEach((event, index) => {
      const imageURL = event.images[0].url;
      const eventName = event.name;
      const eventDate = event.dates.start.localDate;

      eventContainers[index].querySelector('img').src = imageURL;
      eventContainers[index].querySelector('.describtion').textContent =
        eventName;
      eventContainers[index].querySelector('.date').textContent = eventDate;

      eventContainers[index].style.display = '';
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

function showSelectedCountry() {
  const select = document.getElementById('country-select');
  const selectedOption = select.options[select.selectedIndex].value;
  document.getElementById('selected-country').innerHTML =
    'You selected: ' + selectedOption;
  document.getElementById('myModal').style.display = 'block';

  fetchEventsByCountry(selectedOption);
}
async function fetchEventsByCountry(countryCode) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=rZqtteSLhuvkjk3nBGrEH0B1vTkue4Ap`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const events = data._embedded.events;
    const eventContainers = document.querySelectorAll('.event1');

    eventContainers.forEach(event => {
      event.style.display = 'none';
    });

    events.forEach((event, index) => {
      const imageURL = event.images[0].url;
      const eventName = event.name;
      const eventDate = event.dates.start.localDate;

      eventContainers[index].querySelector('img').src = imageURL;
      eventContainers[index].querySelector('.describtion').textContent =
        eventName;
      eventContainers[index].querySelector('.date').textContent = eventDate;

      eventContainers[index].style.display = '';
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

function showSelectedCountry() {
  const select = document.getElementById('country-select');
  const selectedOption = select.options[select.selectedIndex].value;
  document.getElementById('selected-country').innerHTML =
    'You selected: ' + selectedOption;
  document.getElementById('myModal').style.display = 'block';

  fetchEventsByCountry(selectedOption);
}

document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.close');

  closeButton.addEventListener('click', function () {
    closeModal();
  });
});
const modal = document.getElementById('myModal');

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});
async function fetchEventsByCountry(countryCode) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=rZqtteSLhuvkjk3nBGrEH0B1vTkue4Ap`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const events = data._embedded.events;
    const eventContainers = document.querySelectorAll('.event1');

    eventContainers.forEach(event => {
      event.style.display = 'none';
    });

    events.forEach((event, index) => {
      const imageURL = event.images[0].url;
      const eventName = event.name;
      const eventDate = event.dates.start.localDate;

      eventContainers[index].querySelector('img').src = imageURL;
      eventContainers[index].querySelector('.describtion').textContent =
        eventName;
      eventContainers[index].querySelector('.date').textContent = eventDate;

      eventContainers[index].style.display = '';
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

function showSelectedCountry() {
  const select = document.getElementById('country-select');
  const selectedOption = select.options[select.selectedIndex].value;
  document.getElementById('selected-country').innerHTML =
    'You selected: ' + selectedOption;
  document.getElementById('myModal').style.display = 'block';

  fetchEventsByCountry(selectedOption);
}
document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.close');
});
