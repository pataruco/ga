# Homeworks

## What is it

It is a folder with starter and solution codes for all the courses homeworks

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

Once you finished creating/amending a homework run the following to update the zip file for the solution/starter code

```sh
make create-zip application=<NAME OF THE HOMEWORK FOLDER>
```

You can copy in the clipboard the solution or starter zip file URL that is stored in GitHub

```sh
make get-starter-download-path=<NAME OF THE HOMEWORK FOLDER>
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

- [Relaxr 1](./relaxr-1)
- [Relaxr 2](./relaxr-2)

... and more
