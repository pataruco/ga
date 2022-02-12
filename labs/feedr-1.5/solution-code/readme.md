![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Unit #2 Project: Feedr

## Overview

The web is an ever growing medium and it is getting more and more difficult to filter useful
information. In our journey to writing beautiful JavaScript we have come and will come across a
great many reference points that will guide our learning. This is where personal feeds come in
very useful. Online feeds are like to-do lists in that they can be infinitely personalised and
there is not one solution that works for everybody.

For our Unit 2 project we will build **Feedr**, a personalised feed reader. Our feed reader will
pull random bits of information from our favourite news sources, blogs and data sources. The user
will be able to filter between randomly selected information through the dropdown on the header menu.
Clicking/tapping on one of the articles will load a pop up with more information. The user from that
point will be able to either dismiss the additional information or go to the referenced articles.

This will be our first single page app. All of our application views will be
contained in the provided [index.html](index.html) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

## Technical Requirements

### Your core application rules:

**Feed sources:**

Give the user the ability to pull information from multiple sources. Here are several sources we suggest
(please note APIs with a 🔑 require an API to be set up):

**NEWS**

- [Reddit](https://www.reddit.com/dev/api)
- [The Guardian](https://open-platform.theguardian.com/access/)
- [Hacker News](https://github.com/HackerNews/API)
- [Daily WTF](https://thedailywtf.com/articles/tdwtf-api)
- [Event Registry](https://eventregistry.org)
- [newsapi.org](https://newsapi.org) (republishes a number of news sources -- use a max of 1 source with this API)

**SCIENCE**

- [SpaceX](https://docs.spacexdata.com/?version=latest)
- [NASA API](https://api.nasa.gov/) 🔑

**FOOD & DRINK**

- [Beer](https://www.brewerydb.com/developers) 🔑
- [The Cocktail API](https://www.thecocktaildb.com/)

**ENTERTAINMENT**

- [The Movie DB](https://www.themoviedb.org/documentation/api) 🔑
- [Star Wars](https://swapi.dev/)
- [Rick and Morty](https://rickandmortyapi.com/documentation/#rest)
- [Tvmaze](https://www.tvmaze.com/api)

**OUTDOORS**

- [Weather](https://openweathermap.org/api) 🔑
- [The Hiking Project Data API](https://www.hikingproject.com/data) 🔑
- [Pokemon](http://pokeapi.co/)

**OTHER OPEN APIS**

- [Giphy](https://developers.giphy.com/) 🔑
- [Card Deck](https://deckofcardsapi.com/)
- [Chuck Norris](http://www.icndb.com/)
- [The Cat API](https://thecatapi.com/)
- [The Official Joke API](https://official-joke-api.appspot.com/random_ten)

You should also feel free to use other news and information APIs; however, you will find that many APIs that do not support either [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) or [JSONp](https://en.wikipedia.org/wiki/JSONP) will result in a cross-domain restriction error ("No 'Access-Control-Allow-Origin' header is present...") in the browser. To get around this, you can use the following proxy server to filter your API requests.

Let's say you wanted to use the Cocktail API, which has the following endpoint:

`https://www.thecocktaildb.com/api/json/v1/1/random.php`

If you preface the request with the proxy server API as follows...

`https://cors-anywhere.herokuapp.com/https://www.thecocktaildb.com/api/json/v1/1/random.php`

...you should be able to use the Digg API without encountering a cross-domain restriction error. Here's a code example of how you might use the proxy server:

```js
const listElement = document.querySelector('ul');

  async function () {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecocktaildb.com/api/json/v1/1/random.php')

      if (results.ok) {
        const results = await response.json();

        results.drinks.forEach( (drink) => {
          listElement.innerHtml =  listElement.innerHtml + `
            <li>${drink.strDrink}</li>
          `;
        });
      }
    } catch(error) {
      // handle error
    }
  }

```

If you use your own feeds, they must have APIs with the following minimum
requirements:

- Each article must provide an image source for the circular thumbnail at the
  left of the article.
- Must provide either a category, tag, or custom taxonomy to display below the
  title (of course title of article is also required).
- Must provide a point, ranking, or some type of total impressions for the
  respective article.
- Must provide either a full version or a summary of the article for the pop up
  screen.

**Feed rules:**

- When the application first loads display the loading container (see below on
  instructions to toggle this). When you successfully retrieve information from
  the default API hide the loader and replace the content of the `#js-main`
  container with that of the API. The DOM structure of each article must adhere
  to the `.article` structure.
- When the user selects an article's title show the `#js-pop-up` overlay. The
  content of the article must be inserted in the `.container` class inside
  `#js-pop-up`. Make sure you remove the `.loader` class when toggling the article
  information in the pop-up.
- Change the link of the "Read more from source" button to that of the
  respective article.
- When the user selects a source from the dropdown menu on the header, replace
  the content of the page with articles from the newly selected source. Display
  the loading pop up when the user first selects the new source, and hide it on
  success.
- Add an error message (either alert or a notification on the page) if the app
  cannot load from the selected feed.

**Additional UI interaction rules:**

- When the app is loading and when the user selects to load a new feed
  from the dropdown, display the `#js-pop-up` container with the `.loader` class.
  You can toggle the `.hidden` class from the container to display/hide the
  overlay container.

#### Bonus

1. Merge all feeds into one main feed in chronological order for the initial
   view. When the user clicks/taps the "Feedr" logo at the top, they should be
   return to this feed. This will be the new "home view."
2. Filter feed by title according to user keyboard input on the search input
   box. This should run the filter on every keystroke. When the input box is
   cleared, all articles should display in the respective feed.
3. Add infinite scrolling. Start displaying only the first 20 articles and keep
   loading more on user scrolling.

### Necessary Deliverables

- A **working Feedr, built by you**, that can be run locally
- A **new git repository hosted on Github**, where your codebase is maintained.
- Most of the your work will be done on the JavaScript files. You may update
  the `index.html` and `style.css` files if you would like to further customize your
  app.

---

### Getting Started

Here are some sugestions on where to start:

- Start by adding all the DOM functionality first.
- Map out all of the needed fields/properties from each respective feed.
- Start by doing a console.log of the incoming feeds to confirm you have a
  successful transaction before you start mapping anything out.
- Think about ways to best standardize all of your incoming data.
- Test small pieces of functionality frequently, to make sure everything is
  working.
- Use tools such as Stack Overflow, Google, and documentation resources to solve
  problems.

---

### Useful Resources

**Key Resources**

- [MDN JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Understanding Event Delegation](http://learn.jquery.com/events/event-delegation/)
- [A beginner's guide to HTTP and REST](http://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340)
- [Async JS Callbacks](http://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)

---

### Project Feedback + Evaluation

When your project is complete, push the final version to your repo on GitHub and send the link to your instructor(s).

If you'd like to schedule a 15-minute code review, let your Instructor know. This is an opportunity for you to demonstrate your app and explain how you coded it, and for the instructional team to give you feedback on what you did well as well as things you might consider doing differently or adding for your future coding projects.

A code review is optional, so if you'd like to participate in one, it is up to you to contact your Instructor to schedule it once your project is done.
