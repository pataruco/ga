# Components

## What is it

Nx library for shared [React][react] components for different websites in this repo.

## Build

```sh
pnpm nx run components:build
```

## Test

```sh
pnpm nx run components:test
```

## Use

A TypeScript alias been created in `tsconfig.base.json` in the root of the monorepo

```json
{
  // ...
  "paths": {
    "@ga/components": ["components/src/index.ts"]
  } // ...
}
```

and then from TypeScript file in the monorepo you can import it

```ts
import { Footer } from '@ga/components';
```

[react]: https://reactjs.org/
