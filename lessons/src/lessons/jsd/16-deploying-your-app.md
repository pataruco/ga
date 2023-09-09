class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>16 Deploying your app</h1>
</div>

---

## GitHub Pages

- Is a static web hosting service offered by GitHub.
- It is free
- Hosted as subdomains of the github.io domain, or as custom domains bought through a third-party domain name registrar
- Enforce HTTPS can be set for the repository's website to transparently redirect all HTTP requests to HTTPS

---

## GitHub pages steps

- Create a repo on GitHub and clone it

  ```sh
  git clone git@github.com/YOUR-USERNAME/YOUR-REPOSITORY
  ```

- Create an `index.html` file on the root of the repo

  ```sh
  touch index.html
  ```

---

## GitHub pages steps

- Add content to the `index.html` file

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Final project</title>
    </head>
    <body>
      <h1>Hello world</h1>
    </body>
  </html>
  ```

---

## GitHub pages steps

- Create a git branch called `gh-pages`

  ```sh
  git checkout -b gh-pages
  ```

- Commit and push changes to a remote `gh-pages` branch

  ```sh
  git add .
  git commit -m "Your commit message"
  git push origin gh-pages
  ```

- Fire up a browser and go to http://username.github.io/repository. 🚀

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
