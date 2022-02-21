# @shared/components

## What is it

Yarn/Lerna workspace for shared [React][react] components for different [@websites][@websites] in this repo.

## Build

To build this package:

```sh
yarn build
```

## Test

```sh
yarn test
```

## Use

Once it is built you can added to a [@website][@websites] just adding it in the their `package.json`

```json
{
  // ...
  "@shared/components": "^0.0.0"
  // ...
}
```

and then from the root of the monorepo install dependecies and link them

```sh
yarn
yarn lerna bootstrap
```

[react]: https://reactjs.org/
[@websites]: ../../@websites/readme.md
