import { Person, Thing } from 'schema-dts';

export const author: Person = {
  '@type': 'Person',
  name: 'Pedro Martin Valera',
};

export const about: Thing =
  'Course content slides for General Assembly Front-end Development, created by Pedro Martin Valera.';

export const BASE_URL = 'https://fewd.pataruco.dev/';
