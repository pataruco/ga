class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>09 Advanced APIs lab</h1>
</div>

---

## Learning objectives

- Request data from a web service.
- Implement the geolocation API to request a location.
- Process a third party API response and share location data on your website.
- Search documentation needed to make a customise third-party API requests

---

class: code-along

# Code along

Downloand [labs](https://github.com/pataruco/jsd/raw/master/labs/tfl-google-map/tfl-google-map-starter-code.zip)

???

00-fetch-codealong

---

## Building our app

.row[
.col[

1.  Get the users location from the browser
2.  Render a Google map
3.  Create a request to Google Maps using the users location
4.  Create a request to Travel For London (TFL) for bike information
5.  Parse the api responses and add the data to the map
    ]

.col[

![](https://pataruco.s3.amazonaws.com/ga/assets/tfl-app.png)

]
]

---

## Tha Navigator API

- The [`window.navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) property references the Navigator object
- Navigator exposes data such as User Agent and Geolocation

---

class: lab

# Group activity

1. Open `01-bike-map`
2. Add image element to the InfoWindow content string with the source being the bike.jpg file in the images folder. Give this image element a class of 'bike'.

3. Add the Total Number of Docks to the InfoWindow information as a new line in the InfoWindow. HINT: Use the NbDocks value from the bikePoint data.

4. Add another line to the InfoWindow showing the number of available bikes as a percentage of the total number of Bikes. round this percentage to the nearest whole number: e.g: Bike Availability: 23%

**BONUS**: Read the Google Maps docs on custom markers and add custom markers of your own (https://developers.google.com/maps/documentation/javascript/custom-markers) HINT: If you image size is too large, try using the scaled size property (https://stackoverflow.com/questions/15096461/resize-google-maps-marker-icon-image)

---

# Homework

[Download](https://github.com/pataruco/jsd/raw/master/homeworks/week-5/week-5-starter-code.zip)

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
