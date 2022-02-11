import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import Header from '../components/header';
import { Footer } from '@shared/components';
import Page from '../components/page';
import GitHub from '../components/icons/github';
import LinkedIn from '../components/icons/linkedin';
import Twitter from '../components/icons/twitter';

const StyledMain = styled.main`
  padding: 1.25rem;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    li {
      max-width: 20px;
      &:nth-of-type(2) {
        margin: 0 0.625rem;
      }
    }
  }

  small span {
    font-weight: 800;
  }
`;

const About: React.FC = () => (
  <Page>
    <Title title="About" />
    <Header />
    <StyledMain>
      <h1>About</h1>
      <p>I love to teach!</p>

      <p>
        I love passing on knowledge and seeing people grow. I've helped around
        350+ people go from being novices to solid coders in a series of 10-week
        courses.
      </p>

      <p>
        Also, I had the fortune to learnt from amazing front-end teachers at
        General Assembly such as{' '}
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
        . They inspired to share knowledge with kindness and compassion. This is
        my attempt to do so.
      </p>

      <p>
        The content on the slides is my adaption from official JSD curriculum
        and the experiences I have had as a teacher assistant and lead
        instructor in the last 6 years of teaching.
      </p>

      <p>
        The code for this website and the content of the slides are available on{' '}
        <a
          href="https://github.com/pataruco/jsd"
          target="_blank"
          rel="noreferrer"
          className="external-link"
        >
          GitHub.
        </a>
      </p>

      <p>Pedro.</p>

      <p>
        <small>
          <span>P.S.</span>: If you want to contact me, these are my
          coordinates:{' '}
        </small>
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/pataruco"
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <GitHub />
            </picture>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pataruco/"
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <LinkedIn />
            </picture>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/pataruco"
            target="_blank"
            rel="noreferrer"
          >
            <picture>
              <Twitter />
            </picture>
          </a>
        </li>
      </ul>
      <p>
        <small>
          and{' '}
          <a
            href="mailto:pedro.martin@ga.co?subject=Hello Pedro &#128075;"
            rel="noreferrer"
          >
            pedro.martin@ga.co
          </a>
        </small>
      </p>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;
