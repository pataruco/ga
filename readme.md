# GA

> [!WARNING]
> This code is in active development, beware, dragons 🐉 are around

## What is it

Is a **monorepo** with content for all the courses that I teach at [General Assembly London][ga] 🇬🇧

It is divided:

### [archive/](./archive/readme.md)

Legacy code for the previous version of the monorepo

### [components/](./components/README.md)

Shared [React][react] components for different websites in this repo.

### [lessons/](./lessons/readme.md)

All lessons written in Markdown formatted with Remark [syntax][remark-syntax].

### [styles/](./styles/README.md)

Styles for for different websites and lesson slides

### [apps/fewd](./apps/fewd/readme.md)

[React][react] app hosted in [Vercel][vercel] with the custom domain [**https://fewd.pataruco.dev**][site] for Front-end Development course.

### [labs/](./labs/readme.md)

Labs & exercises for each lesson.

### [homeworks/](./homeworks/readme.md)

Exercises for students outside class.

## How to install

- Clone this repo

  ```sh
  git clone git@github.com:pataruco/ga.git
  ```

- Install dependencies

  ```sh
  pnpm install
  ```

## Deployment

A [Github action][gh-actions] per websites is set to deal with deployments to production.

Read more about in the readme of each websites

## CI status

| Website | GitHub Action                                                                                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEWD    | [![Deploy FEWD production](https://github.com/pataruco/ga/actions/workflows/deploy-fewd-production.yml/badge.svg)](https://github.com/pataruco/ga/actions/workflows/deploy-fewd-production.yml) |

[react]: https://reactjs.org/
[vercel]: https://vercel.com
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
[site-fewd-es]: https://fewd-es.pataruco.dev/
[site-jsd]: https://jsd.pataruco.dev/
