'use client';

import { db } from 'apps/fewd/libs/db';
import { onValue, push, ref, set } from 'firebase/database';
import { useEffect, useReducer } from 'react';

type Thing = Record<string, string>;

interface State {
  things: Thing[];
}

type Action = { type: 'set-things'; payload: Thing[] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set-things':
      return {
        ...state,
        things: [...action.payload],
      };

    default:
      throw Error(`No ${JSON.stringify(action)} does not exists`);
  }
};

const initialState: State = {
  things: [],
};

const Recap = () => {
  const thingsWeLearntDb = ref(db, 'things-we-learnt');

  const [{ things }, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    push(thingsWeLearntDb, formData.get('thing'));
  };

  useEffect(() => {
    return onValue(thingsWeLearntDb, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        const thingsReference = Object.entries(data).map(([key, value]) => ({
          [key]: value,
        }));

        dispatch({ type: 'set-things', payload: thingsReference as Thing[] });
      }
    });
  }, [things]);

  const handleClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {
      currentTarget: {
        dataset: { id },
      },
    } = event;

    await set(ref(db, `things-we-learnt/${id}`), null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thing">thing we learnt</label>
        <input type="text" name="thing" />
      </form>

      <ul>
        {things.map((thing, index) => {
          const [[key, value]] = Object.entries(thing);
          return (
            <li key={key + index}>
              {value}
              <button type="button" onClick={handleClickDelete} data-id={key}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Recap;
