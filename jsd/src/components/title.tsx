import React from 'react';
import { Helmet } from 'react-helmet';

interface TitleProps {
  week?: number;
  lesson?: number;
  title?: string;
}

const Title: React.FC<TitleProps> = ({ week, lesson, title }) => {
  let component;
  switch (true) {
    case week && Number.isFinite(week) && lesson && Number.isFinite(lesson):
      component = (
        <Helmet>
          <title>
            Lesson {`${lesson}`} | Week {`${week}`} | JSD | GA London
          </title>
        </Helmet>
      );
      break;
    case week && Number.isFinite(week):
      component = (
        <Helmet>
          <title>Week {`${week}`} | JSD | GA London</title>
        </Helmet>
      );
      break;
    case typeof title === 'string':
      component = (
        <Helmet>
          <title>{title} | JSD | GA London</title>
        </Helmet>
      );
      break;

    default:
      component = (
        <Helmet>
          <title>JSD | GA London</title>
        </Helmet>
      );
      break;
  }
  return component;
};

export default Title;
