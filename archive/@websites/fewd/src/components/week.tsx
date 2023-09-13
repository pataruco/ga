import React from 'react';
import WeekPage from './week-page';
import { Link } from 'react-router-dom';

export interface WeekProps {
  weekNumber: number;
  resources?: string[][];
  bonuses?: string[][];
  firstLessonTitle: string;
  secondLessonTitle: string;
  homeworkPath?: string;
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
        <strong>Note</strong>: Follow this instructions to navigate lesson
        slides
      </small>
    </p>

    <ul>
      <li>
        <small>
          Use <kbd>&#8595;</kbd>, <kbd>&#8594;</kbd>, <kbd>PgDn</kbd>,
          <kbd>Spacebar</kbd>, <kbd>J</kbd> to go next slide.
        </small>
      </li>
      <li>
        <small>
          Use <kbd>&#8593;</kbd>, <kbd>&#8592;</kbd>, <kbd>PgUp</kbd>,{' '}
          <kbd>K</kbd> to go to previous slide.
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
}) => {
  const secondLesson = weekNumber * 2;
  const firstLesson = secondLesson - 1;

  const firstLessonPath = `/week-${weekNumber}/lesson-${firstLesson}`;
  const secondLessonPath = `/week-${weekNumber}/lesson-${secondLesson}`;

  return (
    <WeekPage>
      <h1>Week {weekNumber}</h1>

      <details>
        <summary>
          <h2>Lessons</h2>
        </summary>
        <ul>
          <li>
            Lesson {firstLesson}:{' '}
            <Link to={firstLessonPath}>{firstLessonTitle}</Link>
          </li>
          <li>
            Lesson {secondLesson}:{' '}
            <Link to={secondLessonPath}>{secondLessonTitle}</Link>
          </li>
        </ul>
        <Note />
      </details>

      {resources ? (
        <details>
          <summary>
            <h2>Useful resources</h2>
          </summary>
          <ListOfDetails details={resources} />
        </details>
      ) : null}

      {bonuses ? (
        <details>
          <summary>
            <h2>Bonus materials</h2>
          </summary>
          <ListOfDetails details={bonuses} />
        </details>
      ) : null}

      {homeworkPath ? (
        <p className="homework">
          <Link to={homeworkPath}>Homework</Link>
        </p>
      ) : null}
    </WeekPage>
  );
};

export default Week;
