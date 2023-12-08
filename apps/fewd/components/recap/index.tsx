'use client';

import { db } from 'apps/fewd/libs/db';
import { onValue, push, ref, set } from 'firebase/database';
import { useEffect, useReducer } from 'react';

const DB_NAME = 'things-we-learnt';

type Thing = Record<string, string>;

interface ThingItemProps {
  thing: Thing;
}

const ThingItem: React.FC<ThingItemProps> = ({ thing }) => {
  const handleClickDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {
      currentTarget: {
        dataset: { id },
      },
    } = event;

    await set(ref(db, `${DB_NAME}/${id}`), null);
  };

  const [[key, value]] = Object.entries(thing);
  return (
    <li>
      {value}
      <button type="button" onClick={handleClickDelete} data-id={key}>
        delete
      </button>
    </li>
  );
};

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
  const thingsWeLearntDb = ref(db, DB_NAME);

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thing">thing we learnt</label>
        <input type="text" name="thing" />
      </form>

      <ul>
        {things.map((thing, index) => (
          <ThingItem thing={thing} key={Object.keys(thing).join() + index} />
        ))}
      </ul>
    </>
  );
};

export default Recap;
