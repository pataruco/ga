class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>API Requests and Responses</h1>
</div>

---

## Agenda

- Make HTTP requests to external API sources for data.
- Evaluate APIs based on documentation.
- Use API responses to update HTML content.

---

## The Request Response Cycle

.row[
.column[
![Request and response cycle](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction/web_application_with_html_and_steps.png)
]
.column[

1. Browser send a HTTP request to the server
2. Requests for dynamic resources are forwarded to server-side code
   (application)
3. Application interprets the request, reads required information from the
   database
4. Combines the retrieved data with HTML templates
5. Sends back a response containing the generated HTML
6. Browser read response and re render
   ]
   ]

---

## The Request Response Cycle

.row[
.column[
![Request and response cycle](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction/web_application_with_html_and_steps.png)
]
.column[

When we click a link or type in a URL to visit any page of any website, the browser is communicating with a web server. The browser sends a REQUEST and the server issues a RESPONSE.

APIs, or application programming interfaces, provide a way for different applications to talk to each other and exchange data. Simply put, an API is a computer that receives requests for information and returns response data.

]
]

---

## API's

So, what kind of data do APIs serve up?

- Google Maps, Places and Docs
- Social media content - Facebook posts, Instagram images, Tweets
- eCommerce - Stripe / Paypal payments
- Weather, Country data
- Public transport timetables, Tube status
- Financial data - currencies, stocks and shares
- An exhaustive list of public APIs can be found here: https://github.com/public-apis/public-apis

---

## JSON

- Most APIs respond with data in a format called **JSON** - JavaScript Object Notation.
- It's pronounced “jasOn”.
- It's native to JS and is data structured in the form of objects, arrays and string properties.

---

## JSON

```json
{
  "name": "Estonia",
  "topLevelDomain": [".ee"],
  "alpha3Code": "EST",
  "callingCodes": ["372"],
  "capital": "Tallinn",
  "flag": "https://restcountries.eu/data/est.svg",
  "altSpellings": ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
  "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "€" }],
  "languages": [
    {
      "iso639_2": "est",
      "name": "Estonian",
      "nativeName": "eesti"
    }
  ],
  "translations": {
    "de": "Estland",
    "es": "Estonia",
    "fr": "Estonie",
    "ja": "エストニア",
    "it": "Estonia",
    "br": "Estônia",
    "fa": "استونی"
  }
}
```

---

## Fetching Data

APIs work on a request-response cycle, so our first step is to make a request. API requests use the HTTP protocol, meaning we'll need to use a URL address.

```text
http://www.domain.com:1234/path/to/resource?a=b&x=y
|___|________________|____|________________|_______|
  1         2           3         4           5
```

1. Protocol
2. Host
3. Port
4. Resource path
5. Query

---

## Fetching Data

### `fetch()`

Once you have an address, you can send a request using JavaScript's built-in fetch() function, which accepts the destination URL as a parameter.

```javascript
const response = await fetch(url);
```

---

## Fetching Data

### Asynchronous Code With `async` / `await`

API calls are **asynchronous**. Meaning the request happens in the background while the user is interacting with your app.

Because we have no idea how long the response will take to return, we have to await the result. We can do so using two keywords that come as a pair: async and await.

```javascript
async function askForData() {
  const url = 'http://example.com';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // take a look at what you got from the API
}
```

---

## Lab &#x1F9EA;

Weather API

[Starter code](https://github.com/pataruco/fewd/raw/master/labs/weather-api/weather-api-starter-code.zip)

---

## API

### Evaluating APIs

**Read the docs! ⚠️**

Every API is unique — you will have to explore its documentation to figure out what data you want to access and what URL to use in order to send requests.

However, there are a few standard details to check for in any API:

- Do I need an API key?
  - If so, are there rate limits or charges for requests?
  - How do I include the key in my requests?
- What are the available endpoints for data?
  - What URL format can search for specific data?
- What will the response data look like?
  - Typically the response will be JSON.

---

## API Keys

Many APIs require you to include a **key** with your request.

You can register with the API’s website to receive your unique key.

Keys are used to track your requests for rate limits and potential charges. Don’t worry, most APIs have a free tier!

---

## Objects

API endpoints will almost always return JSON in the form of an object.

API response objects are infamously complex in their formats. To dig down to the layer of information you actually want, carefully log one layer at a time until you reach the data you’re looking for!

**Data**:

```json
{
  "data": "car",
  "make": "ford",
  "model": "focus",
  "details": {
    "color": "blue",
    "mileage": "54019"
  }
}
```

**Inspect the Data in tyhe console**

```javascript
console.log(carData);
console.log(carData.details);
console.log(carData.details.color);
```

---

## Lab &#x1F9EA;

Giphy bank

[Starter code](https://github.com/pataruco/fewd/raw/master/labs/giphy-search-api/giphy-search-api-starter-code.zip)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of Presentation</h1>
</div>
