import React from 'react';
import WeekPage from './week-page';
import { Link } from 'react-router-dom';

export interface WeekProps {
  bonuses?: string[][];
  firstLessonPath: string;
  firstLessonTitle: string;
  homeworkPath?: string;
  resources?: string[][];
  secondLessonPath: string;
  secondLessonTitle: string;
  weekNumber: number;
}

interface ListOfDetailsProps {
  details: string[][];
}

const ListOfDetails: React.FC<ListOfDetailsProps> = ({ details }) => (
  <ul>
    {details.map((resource, i) => {
      const [title, url] = resource;
      return (
        <li key={i}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            {title}
          </a>
        </li>
      );
    })}
  </ul>
);

const Note: React.FC = () => (
  <footer className="notes">
    <p>
      <small>
        <strong>Nota</strong>: Sigue las siguientes instrucctiones para navegar
        las diapositivas
      </small>
    </p>

    <ul>
      <li>
        <small>
          Usa <kbd>&#8595;</kbd>, <kbd>&#8594;</kbd>, <kbd>PgDn</kbd>,
          <kbd>Espacio</kbd>, <kbd>J</kbd> para ir a la diapositiva siguiente.
        </small>
      </li>
      <li>
        <small>
          Usa <kbd>&#8593;</kbd>, <kbd>&#8592;</kbd>, <kbd>PgUp</kbd>,{' '}
          <kbd>K</kbd> para ir a la diapositiva anterior.
        </small>
      </li>
    </ul>
  </footer>
);

const Week: React.FC<WeekProps> = ({
  weekNumber,
  resources,
  bonuses,
  firstLessonTitle,
  secondLessonTitle,
  homeworkPath,
  firstLessonPath,
  secondLessonPath,
}) => {
  return (
    <WeekPage>
      <h1>Semana {weekNumber}</h1>

      <details>
        <summary>
          <h2>Lecciones</h2>
        </summary>
        <ul>
          <li>
            Lección: <Link to={firstLessonPath}>{firstLessonTitle}</Link>
          </li>
          <li>
            Lección: <Link to={secondLessonPath}>{secondLessonTitle}</Link>
          </li>
        </ul>
        <Note />
      </details>

      {resources ? (
        <details>
          <summary>
            <h2>Recursos útiles</h2>
          </summary>
          <ListOfDetails details={resources} />
        </details>
      ) : null}

      {bonuses ? (
        <details>
          <summary>
            <h2>Materiales extras</h2>
          </summary>
          <ListOfDetails details={bonuses} />
        </details>
      ) : null}

      {homeworkPath ? (
        <p className="homework">
          <Link to={homeworkPath}>Tarea(s)</Link>
        </p>
      ) : null}
    </WeekPage>
  );
};

export default Week;
