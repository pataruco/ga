import React from 'react';
import type { RoutesByWeek } from '../@types/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleDetails = styled.details`
  h2 {
    display: inline-block;
  }

  p {
    margin-bottom: 0.75em;
    line-height: 1.1;
    padding-left: 1rem;
  }

  dl {
    margin: 0;
    padding-left: 1rem;
  }

  dt,
  dd {
    margin: 0;
    display: inline-block;
    margin-bottom: 0.75em;
    line-height: 1.1;
  }

  dt {
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

const ResourcesPerWeekDatails: React.FC<RoutesByWeek> = ({
  weekNumber,
  lesson1: { name: firstLessonPath, name: firstLessonTitle },
  lesson2: { name: secondLessonPath, name: secondLessonTitle },
  workshops,
  homework,
}) => {
  return (
    <StyleDetails>
      <summary>
        <h2>Semana {weekNumber}</h2>
      </summary>
      <p>
        <Link to={`/week-${weekNumber}`}>Detalle de semana</Link>
      </p>
      <dl>
        <div>
          <dt>Lección: </dt>
          <dd>
            <Link to={firstLessonPath}>{firstLessonTitle}</Link>
          </dd>
        </div>
        <div>
          <dt>Lección: </dt>
          <dd>
            <Link to={secondLessonPath}>{secondLessonTitle}</Link>
          </dd>
        </div>
        {workshops ? (
          <div>
            <dt>Taller: </dt>
            <dd>
              <Link to={workshops.path}>{workshops.name}</Link>
            </dd>
          </div>
        ) : null}
        {homework ? (
          <div>
            <dt>Tarea: </dt>
            <dd>
              <Link to={homework.path}>{homework.name}</Link>
            </dd>
          </div>
        ) : null}
      </dl>
    </StyleDetails>
  );
};

export default ResourcesPerWeekDatails;
