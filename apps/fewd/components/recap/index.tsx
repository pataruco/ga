'use client';

import { db } from 'apps/fewd/libs/db';
import { onValue, push, ref } from 'firebase/database';
import { useEffect, useReducer } from 'react';

type Thing = Record<string, string>;

interface State {
  things: Thing[];
}

type Action = { type: 'add-thing'; payload: Thing };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add-thing':
      return {
        ...state,
        things: [action.payload, ...state.things],
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

      console.log({ data });
      if (snapshot.exists()) {
        Object.entries(data).map(([key, value]) => {
          dispatch({ type: 'add-thing', payload: { [key]: value } as Thing });
        });
      }
    });
  }, []);

  console.log({ things });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thing">thing we learnt</label>
        <input type="text" name="thing" />
      </form>
    </>
  );
};

export default Recap;
