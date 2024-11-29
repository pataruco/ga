'use client';

import './style.scss';

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
      currentTarget: { dataset: { id } },
    } = event;

    await set(ref(db, `${DB_NAME}/${id}`), null);
  };

  const [[key, value]] = Object.entries(thing);
  return (
    <li>
      <span>{value}</span>
      <button type="button" onClick={handleClickDelete} data-id={key}>
        delete
      </button>
    </li>
  );
};

interface State {
  things: Thing[];
  inputValue: string;
  isAdmin: boolean;
}

type Action =
  | { type: 'set-things'; payload: Thing[] }
  | { type: 'set-input-value'; payload: string }
  | { type: 'set-is-admin'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set-things':
      return {
        ...state,
        things: [...action.payload],
      };

    case 'set-input-value':
      return {
        ...state,
        inputValue: action.payload,
      };

    case 'set-is-admin':
      return {
        ...state,
        isAdmin: action.payload,
      };

    default:
      throw Error(`No ${JSON.stringify(action)} does not exists`);
  }
};

const initialState: State = {
  things: [],
  inputValue: '',
  isAdmin: false,
};

const Recap = () => {
  const thingsWeLearntDb = ref(db, DB_NAME);

  const [{ things, inputValue, isAdmin }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    push(thingsWeLearntDb, inputValue);
    dispatch({ type: 'set-input-value', payload: '' });
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    dispatch({ type: 'set-input-value', payload: value });
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
  }, []);

  const handleDeleteAll = async (event: React.MouseEvent) => {
    event.preventDefault();
    await set(ref(db, DB_NAME), null);
  };

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    dispatch({ type: 'set-is-admin', payload: searchParams.has('admin') });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleDeleteAll}
        className={isAdmin ? 'delete-all visible' : 'delete-all'}
      >
        Delete all
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="thing">What you learnt?</label>
        <input
          type="text"
          name="thing"
          onChange={handleOnChange}
          value={inputValue}
          required
          min={2}
          id="thing"
        />
        <button type="submit">submit</button>
      </form>

      <ol>
        {things.map((thing) => (
          <ThingItem thing={thing} key={crypto.randomUUID()} />
        ))}
      </ol>
    </>
  );
};

export default Recap;
