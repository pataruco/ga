'use client';

import 'normalize.css';
import '../../../styles/site/index.scss';
import './index.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import { useReducer } from 'react';

const STUDENTS = ['Ryan', 'Carlton', 'Athina', 'Deborah', 'Elvia', 'Forest'];

interface State {
  students: string[];
  currentStudent: string;
  areStudentsAvailable: boolean;
}

const initialState: State = {
  students: STUDENTS,
  currentStudent: '',
  areStudentsAvailable: true,
};

type Action = { type: 'pick-random-student' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'pick-random-student': {
      const randomIndex = Math.floor(Math.random() * state.students.length);
      const currentStudent = state.students[randomIndex];
      const students = state.students.filter(
        (student) => student !== currentStudent,
      );
      const areStudentsAvailable = students.length > 0;
      return {
        students,
        currentStudent,
        areStudentsAvailable,
      };
    }
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
};

async function Index() {
  const [{ students, currentStudent, areStudentsAvailable }, dispatch] =
    useReducer(reducer, initialState);

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch({ type: 'pick-random-student' });
  };

  const renderPlaceHolder = () => {
    switch (true) {
      case currentStudent && currentStudent.length > 0:
        return <h2>{currentStudent}</h2>;
      case !areStudentsAvailable:
        return <h2>Let's go to the pub</h2>;
      default:
        return <h2>Who is next?</h2>;
    }
  };

  return (
    <MainLayout>
      <h1>Random Picker</h1>

      {renderPlaceHolder()}

      <button type="button" className="next" onClick={handleOnClick}>
        Next
      </button>

      <ul>
        {students.map((student) => (
          <li key={crypto.randomUUID()}>{student}</li>
        ))}
      </ul>
    </MainLayout>
  );
}

export default Index;
