import 'normalize.css';
import '../../styles/site/index.scss';

import MainLayout from 'apps/fewd/components/main-layout';
import { memo } from 'react';
import { Article, WithContext } from 'schema-dts';

function Index() {
  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'About',
    description: 'About Pedro Martin teaching experience',
  };

  <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: parse jsonLd
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />;

  return (
    <MainLayout>
      <h1>About</h1>
      <p>I love to teach!</p>

      <p>
        I love passing on knowledge and seeing people grow. I've helped around
        450+ people go from being novices to solid coders in a series of 10-week
        courses.
      </p>

      <p>
        Also, I had the fortune to learn from fantastic front-end teachers at
        the General Assembly, such as{' '}
        <a
          href="https://generalassemb.ly/instructors/guy-routledge/1917"
          target="_blank"
          rel="noreferrer"
          className="external-link"
        >
          Guy
        </a>
        ,{' '}
        <a
          href="https://generalassemb.ly/instructors/matt-studdert/4526"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          Matt
        </a>{' '}
        and{' '}
        <a
          href="https://generalassemb.ly/instructors/james-sherry/7533"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          James
        </a>
        . They are inspired to share knowledge with kindness and compassion.
        This is my attempt to do so.
      </p>

      <p>
        The content on the slides is my adaption from the official FEWD 3.2
        curriculum and the experiences I have had as a teacher assistant and
        lead instructor in the last {new Date().getFullYear() - 2015} years of
        teaching.
      </p>

      <p>
        The code for this website and the content of the slides are available on{' '}
        <a
          href="https://github.com/pataruco/ga"
          target="_blank"
          rel="noreferrer"
          className="external-link"
        >
          GitHub.
        </a>
      </p>

      <p>Pedro.</p>

      <p>
        <span>P.S.</span>: If you want to contact me, these are my coordinates:
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/pataruco"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pataruco/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/pataruco"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            X
          </a>
        </li>
        <li>
          <a
            href="mailto:pedro.martin@ga.co?subject=Hello Pedro &#128075;"
            rel="noreferrer"
          >
            pedro.martin@ga.co
          </a>
        </li>
        <li>
          <a
            href="https://www.pataruco.dev/blog"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            Blog
          </a>
        </li>
      </ul>
    </MainLayout>
  );
}

export default memo(Index);
