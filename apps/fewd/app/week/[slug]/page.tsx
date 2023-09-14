'use client';

import 'normalize.css';
import '../../../styles/site/index.scss';

import Link from 'next/link';
import styled from 'styled-components';

import MainLayout from 'apps/fewd/components/main-layout';
import { memo } from 'react';
import { routesByWeek } from '../../../curriculum/weeks';

const StyledMainLayout = styled(MainLayout)`
  main {
    li {
      margin-bottom: 0.75rem;
    }

    summary > h2 {
      display: inline-block;
    }

    details ul {
      margin: 0;
    }

    .notes {
      li,
      p {
        margin-bottom: 0.75em;
        line-height: 1.1;
      }

      kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px monospace;
        line-height: normal;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border-bottom-color: #d1d5da;
        border: 1px solid #d1d5da;
        border-radius: 6px;
        box-shadow: inset 0 -1px 0 #d1d5da;
      }
    }

    .homework {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 1.06rem;
    }
  }
`;

interface WeekPageProps {
  params: {
    slug: string;
  };
}

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

interface ListOfDetailsProps {
  details: Anchor[];
}

const ListOfDetails: React.FC<ListOfDetailsProps> = ({ details }) => (
  <ul>
    {details.map(({ content, link }, i) => {
      return (
        <li key={link + i}>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            {content}
          </Link>
        </li>
      );
    })}
  </ul>
);

async function Index({ params: { slug } }: WeekPageProps) {
  const { default: week } = await import(`../../../curriculum/weeks/${slug}`);

  return (
    <StyledMainLayout>
      {week ? (
        <>
          <h1>Week: {slug}</h1>
          <details>
            <summary>
              <h2>Lessons</h2>
            </summary>
            <ul>
              <li>
                Lesson {week.weekNumber * 2 - 1}:{' '}
                <Link href={`/lessons/${week.lesson1.link}`}>
                  {week.lesson1.content}
                </Link>
              </li>
              <li>
                Lesson {week.weekNumber * 2}:{' '}
                <Link href={`/lessons/${week.lesson2.link}`}>
                  {week.lesson2.content}
                </Link>
              </li>
            </ul>
            <Note />
          </details>

          {week.resources ? (
            <details>
              <summary>
                <h2>Useful resources</h2>
              </summary>
              <ListOfDetails details={week.resources} />
            </details>
          ) : null}

          {week.bonuses ? (
            <details>
              <summary>
                <h2>Bonus materials</h2>
              </summary>
              <ListOfDetails details={week.bonuses} />
            </details>
          ) : null}

          {week.homework ? (
            <p className="homework">
              <Link href={week.homework.link}>Homework</Link>
            </p>
          ) : null}
        </>
      ) : null}
    </StyledMainLayout>
  );
}

export async function generateStaticParams() {
  return routesByWeek.map(({ weekNumber }) => ({
    params: {
      slug: `${weekNumber}`,
    },
  }));
}

export default memo(Index);
