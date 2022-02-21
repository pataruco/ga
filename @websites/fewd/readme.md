[![Deploy FEWD](https://github.com/pataruco/ga/actions/workflows/deploy-fewd.yml/badge.svg)](https://github.com/pataruco/ga/actions/workflows/deploy-fewd.yml)

# @websites/fewd

## What it is?

It is a website built with React with contents for Front-end Web Development course for [General Assembly London][ga] 🇬🇧

## How to run locally

```sh
yarn workspace @websites/fewd start
```

## How to deploy

A [Github action][gh-actions] is set to deal with deployments to prod. To trigger a deployment

- Create a git release [tag][git-tag] with the following convention `FEWD.<number>.<number>.<number>`

  ```sh
  git tag FEWD.1.0
  ```

- Push tag to remote

  ```sh
  git push --tags
  ```

- You can check CI/CD build [here](https://github.com/pataruco/ga/actions/workflows/deploy-fewd.yml?query=workflow%3ACI)

- Make a tea 🫖

- Check [site][site] live

- 🚀

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
