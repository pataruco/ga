# Homeworks

Folder with starter and solution codes for JSD homeworks

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

---

<!-- TODO: update readme -->

# FEWD

## Homeworks

Each homework has a main folder with the following structure

```text
homework-name
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

The idea behind it, is to have in the same repo a reference for the homework with a link to download a zip

## Development

Once you finished creating/amending a homework run the following to delete the zip file for the solution/starter code, compress and create a new ones

- Delete the zip file for the solution/starter code

```sh
yarn workspace homeworks build
```

## Index

- [Relaxr 1](./relaxr-1)
- [Relaxr 2](./relaxr-2)
