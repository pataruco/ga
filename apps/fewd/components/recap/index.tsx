'use client';

import { useReducer } from 'react';

interface State {
  thing: string;
  things: string[];
}

type Action =
  | { type: 'add-thing'; payload: string }
  | { type: 'set-thing'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add-thing':
      return {
        ...state,
        things: [action.payload, ...state.things],
        thing: '',
      };

    case 'set-thing':
      return {
        ...state,
        thing: action.payload,
      };

    default:
      throw Error(`No ${JSON.stringify(action)} does not exists`);
  }
};

const initialState: State = {
  thing: '',
  things: [],
};

const Recap = () => {
  const [{ thing, things }, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    dispatch({ type: 'set-thing', payload: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'add-thing', payload: thing });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thing">thing we learnt</label>
        <input
          type="text"
          name="thing"
          onChange={handleOnChange}
          value={thing}
        />
      </form>

      <ul>
        {things.map((item, i) => (
          <li key={`${item}${i}`}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Recap;
