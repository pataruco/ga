# FEWD

It is a Nx app website built with [Next.js](https://nextjs.org/) with contents for Front-end Web Development course for [General Assembly London][ga] 🇬🇧

## Development

```sh
pnpm nx run lessons:copyFewdLessons
pnpm nx run fewd:create-timestamp
pnpm nx run fewd:serve
```

## Format

```sh
pnpm nx run fewd:format
```

## Lint

```sh
pnpm nx run fewd:lint
```

## Test

```sh
pnpm nx run fewd:lint
```

## Deploy

A [Github action][gh-actions] is set to deal with deployments to prod. To trigger a deployment

- Create a git release [tag][git-tag] with the following convention `FEWD.<number>.<number>.<number>`

  ```sh
  git tag FEWD.1.0
  ```

- Push tag to remote

  ```sh
  git push --tags
  ```

- You can check [CI/CD build](https://github.com/pataruco/ga/actions/workflows/deploy-fewd-production.yml)

- Make a tea 🫖

- Check [site][site] live

- 🚀

[react]: https://reactjs.org/
[vercel]: https://vercel.com
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
