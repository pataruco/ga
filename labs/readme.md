# Labs

Folder with starter and solution codes for JSD Labs

## How to run it

To check all commands available run

```sh
make help
```

## Commands

| Command                      | What it does?                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `create-zip`                 | create zips for starter and solution code (`make create-zip application=<application_folder>`)                            |
| `delete-all`                 | delete all zips for folders                                                                                               |
| `delete-zip`                 | delete zips for starter and solution code (`make delete-zip application=<application_folder>`)                            |
| `get-solution-download-path` | Copy in clipboard GitHub solution code download path for a given lab (`make get-solution-download-path application=node`) |
| `get-starter-download-path`  | Copy in clipboard GitHub starter code download path for a given lab (`make get-starter-download-path application=node`)   |
| `zip-all`                    | create all zips for folders                                                                                               |

TODO: merge readmes

# FEWD

## Labs

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

Once you finished creating/amending a lab, run the following to delete the zip file for the solution/starter code and compress and create a new ones

```sh
yarn workspace labs build
```

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
