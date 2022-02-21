# @shared/styles

## What is it

Yarn/Lerna workspace for shared styles for different [@websites][@websites] and [lessons][@lessons] in this repo.

Styles are written in Sass.

It is bundle it as a NPM package.

## Build

From the root of the monorepo type on your terminal

```sh
yarn workspace @shared/styles build
yarn
yarn lerna bootstrap
```

## Use

Once it is built you can added to a [@website][@websites] and [lessons][@lessons] just adding it in the their `package.json`

```json
{
  // ...
  "@shared/styles": "^0.0.0"
  // ...
}
```

[react]: https://reactjs.org/
[@websites]: ../../@websites/readme.md
[@lessons]: ../lessons/readme.md
