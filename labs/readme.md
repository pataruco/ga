# Labs

## What is it

It is a folder with starter and solution codes for all the courses labs 🧪

Each labs has a main folder with the following structure

```text
lab-name
|
|- readme.md
|- starter-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
|- solution-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
starter-code.zip
solution-code.zip
```

The idea behind it, is to have in the same repo a reference for the lab with a link to download a zip

## Development

Once you finished creating/amending a lab run the following to update the zip file for the solution/starter code

```sh
make create-zip application=<NAME OF THE LAB FOLDER>
```

You can copy in the clipboard the solution or starter zip file URL that is stored in GitHub

```sh
make get-starter-download-path=<NAME OF THE LAB FOLDER>
```

## Commands

To check all commands available run

```sh
make help
```

Rest of commands

| Command                      | What it does?                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `create-zip`                 | create zips for starter and solution code (`make create-zip application=<application_folder>`)                            |
| `delete-all`                 | delete all zips for folders                                                                                               |
| `delete-zip`                 | delete zips for starter and solution code (`make delete-zip application=<application_folder>`)                            |
| `get-solution-download-path` | Copy in clipboard GitHub solution code download path for a given lab (`make get-solution-download-path application=node`) |
| `get-starter-download-path`  | Copy in clipboard GitHub starter code download path for a given lab (`make get-starter-download-path application=node`)   |
| `zip-all`                    | create all zips for folders                                                                                               |

## Index

- [Accordion](./accordion)
- [Arrays & loops](./array-loops)
- [Color switcher](./color-switcher)
- [Cookie recipe](./cookie-recipe)
- [Drum kit](./drum-kit)
- [Forms](./forms)
- [Giphy searh API](./giphy-search-api)
- [Grids](./grid)
- [Hamburguer menu](./hamburguer-menu)
- [Magic scroll](./magic-scroll)
- [Mobile menu](./mobile-menu)
- [Nested selectors](./nested-selectors)
- [Press release](./press-release)
- [Responsive lab](./responsive-lab)
- [Responsive Uber](./responsive-uber)
- [Score keeper](./score-keeper)
- [Slider](./slider)
- [Startup matchmaker](./startup-matchmaker)
- [Tag boxes](./tag-boxes)
- [Traffic lights](./traffic-lights)
- [Weather api](./weather-api)

... and more
