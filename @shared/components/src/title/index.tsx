import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

interface TitleProps {
  week?: number;
  lesson?: number;
  title?: string;
  courseName: string;
}

const Title = ({ week, lesson, title, courseName }: TitleProps) => {
  let component: JSX.Element;
  switch (true) {
    case week && Number.isFinite(week) && lesson && Number.isFinite(lesson):
      component = (
        <Helmet>
          <title>
            Lesson {`${lesson}`} | Week {`${week}`} | {courseName} | GA London
          </title>
        </Helmet>
      );
      break;
    case week && Number.isFinite(week):
      component = (
        <Helmet>
          <title>
            Week {`${week}`} | {courseName} | GA London
          </title>
        </Helmet>
      );
      break;
    case typeof title === 'string':
      component = (
        <Helmet>
          <title>
            {title} | {courseName} | GA London
          </title>
        </Helmet>
      );
      break;

    default:
      component = (
        <Helmet>
          <title>{courseName} | GA London</title>
        </Helmet>
      );
      break;
  }
  return () => {
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return component;
  };
};

export default Title;
