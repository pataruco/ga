/* global google:ignore */

// 1. Get user’s location.
// 2. Render a Google map.
// 3. Center Google Maps on user’s location
// 4. Create request to TFL for bike information.
// 5. Parse API response and add locations to map.
// 6. Create an information window for when a user selects a bike point

const mapElement = document.querySelector('#map');

let map;
let infoWindow;

const getBikeInfo = (bikeData) => {
  return {
    name: bikeData.commonName,
    numberOfBikes: bikeData.additionalProperties.find(
      (obj) => obj.key === 'NbBikes',
    ).value,
    numberOfSpaces: bikeData.additionalProperties.find(
      (obj) => obj.key === 'NbEmptyDocks',
    ).value,
    numberOfDocks: bikeData.additionalProperties.find(
      (obj) => obj.key === 'NbDocks',
    ).value,
  };
};

// 6. Create an information window for when a user selects a bike point
const createInfoWindow = ({ marker, bikeData }) => {
  if (infoWindow) {
    infoWindow.close();
  }

  const { name, numberOfBikes, numberOfSpaces, numberOfDocks } =
    getBikeInfo(bikeData);

  infoWindow = new google.maps.InfoWindow({
    content: `
          <div>
            <img src='./images/bike.jpg' alt="Bike" class="bike">
            <h3>${name}</h3>
            <p>Number of available bikes: ${numberOfBikes}</p>
            <p>Number of available spaces: ${numberOfSpaces}</p>
            <p>Total Number of docks: ${numberOfDocks}</p>
            <p>Availability: ${Math.round(
              (numberOfSpaces / numberOfDocks) * 100,
            )}%</p>
          </div>`,
  });

  infoWindow.open(map, marker);
  map.setCenter(marker.getPosition());
};

const renderBike = (bikeData) => {
  // const icon = {
  //   url: 'images/blue-marker.jpg',
  //   scaledSize: new google.maps.Size(32, 32),
  //   origin: new google.maps.Point(0, 0),
  //   anchor: new google.maps.Point(0, 0),
  // };

  const { lat, lon: lng } = bikeData;

  const marker = new google.maps.Marker({
    position: { lat, lng },
    map: map,
    // icon,
  });

  marker.addListener('click', () => {
    createInfoWindow({ marker, bikeData });
  });
};

// 5. Parse API response and add locations to map.
const renderAllBikeData = (allBikeData) => {
  allBikeData.forEach(renderBike);
};

// 4. Create request to TFL for bike information.
const fetchBikeData = async () => {
  try {
    const response = await fetch('https://api.tfl.gov.uk/bikepoint');

    if (response.ok) {
      const bikeData = await response.json();
      renderAllBikeData(bikeData);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    renderMapError(error);
  }
};

// 2. Render a Google map.
const initMap = ({ lat, lng }) => {
  map = new google.maps.Map(mapElement, {
    zoom: 14,
    // 3. Center Google Maps on user’s location
    center: { lat, lng },
  });

  fetchBikeData();
};

const renderMapError = (error) => {
  mapElement.textContent = error.message;
};

// 1. Get user’s location.
const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (error) {
        return renderMapError(error);
      }
      const {
        coords: { latitude: lat, longitude: lng },
      } = position;

      initMap({ lat, lng });
    });
  } else {
    renderMapError('Sorry, the browser does not support geolocation');
  }
};

const main = () => {
  getUserLocation();
};

main();
