# GA

> [!WARNING]
> This code is in active development, beware, dragons 🐉 are around

## What is it

Is a **monorepo** with content for all the courses that I teach at [General Assembly London][ga] 🇬🇧

It is divided:

### [@shared/](./@shared/readme.md)

- [@shared/components](./@shared/components/readme.md): shared [React][react] components for different [@websites][@websites] in this repo.
- [@shared/lessons](./@shared/lessons/readme.md): all lessons as a NPM package written in Markdown formatted with Remark [syntax][remark-syntax].
- [@shared/styles](./@shared/styles/readme.md): styles for for different [@websites][@websites] and [lesson slides][@shared/lessons].

### [@websites/](./@websites/readme.md)

- [@websites/fewd](./@websites/fewd/readme.md): [React][react] app hosted in [Netlify][netlify] with the custom domain [**https://fewd.pataruco.dev**][site] for Front-end Development course.
- [@websites/fewd-es](./@websites/fewd-es/readme.md): [React][react] app hosted in [Netlify][netlify] with the custom domain [**https://fewd-es.pataruco.dev**][site-fewd-es] for Front-end Development Español 🇪🇸 course.
- [@websites/jsd](./@websites/jsd/readme.md): [React][react] app hosted in [Netlify][netlify] with the custom domain [**https://jsd.pataruco.dev**][site-jsd] for JavaScript Development 🇪🇸 course.

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
  pnpm
  ```

## Deployment

A [Github action][gh-actions] per [website][@websites] is set to deal with deployments to production.

Read more about in the readme of each [website][@websites]

## CI status

| Website | Github Action                                                                                                                                                              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JSD     | [![JSD](https://github.com/pataruco/ga/actions/workflows/deploy-jsd.yml/badge.svg)](https://github.com/pataruco/ga/actions/workflows/deploy-jsd.yml)                       |
| FEWD    | [![Deploy FEWD](https://github.com/pataruco/ga/actions/workflows/deploy-fewd.yml/badge.svg)](https://github.com/pataruco/ga/actions/workflows/deploy-fewd.yml)             |
| FEWD ES | [![Deploy FEWD ES 🇪🇸](https://github.com/pataruco/ga/actions/workflows/deploy-fewd-es.yml/badge.svg)](https://github.com/pataruco/ga/actions/workflows/deploy-fewd-es.yml) |

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
[site-fewd-es]: https://fewd-es.pataruco.dev/
[site-jsd]: https://jsd.pataruco.dev/
[@websites]: ./@websites/readme.md
[@shared/lessons]: ./@shared/lessons/readme.md
