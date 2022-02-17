import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import {
  Footer,
  GitHubLogo,
  LinkedinLogo,
  TwitterLogo,
  Title,
} from '@shared/components';
import Page from '../components/page';

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

const yearsOfTeaching = new Date().getFullYear() - 2015;

const About: React.FC = () => (
  <Page>
    <Title courseName="FEWD ES" title="About" />
    <Header />
    <StyledMain>
      <h1 lang="en">About me</h1>
      <p>¡Me encanta enseñar!</p>

      <p>
        Me gusta transmitir conocimientos y formar. He ayudado a más de 400
        personas a ser programadores en cursos de 10 semanas (a veces más).
      </p>

      <p>
        Tuve la fortuna de aprender de increíbles instructores de front-end de
        General Assembly como{' '}
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
        y{' '}
        <a
          href="https://generalassemb.ly/instructors/james-sherry/7533"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          James
        </a>
        . Ellos me inspiraron compartir conocimiento con amabilidad y compasión.
        Este es mi intento de hacerlo.
      </p>

      <p>
        El contenido de las diapositivas es mi adaptación del plan de estudios
        oficial de{' '}
        <abbr
          title="Desarrollo de front end por sus siglas en inglés"
          lang="en"
        >
          FEWD
        </abbr>
        , sazonado con un poquito de{' '}
        <a
          href="https://es.reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="external-link"
          lang="en"
        >
          React.
        </a>{' '}
        y de las experiencias que he tenido como asistente instruccional e
        instructor principal en los últimos {yearsOfTeaching} años de enseñanza.
      </p>

      <p>
        El código de este sitio web y el contenido de las diapositivas están
        disponibles en{' '}
        <a
          href="https://github.com/pataruco/ga"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.
        </a>
      </p>

      <p>Pedro.</p>

      <p>
        <small>
          <span>P.D.</span>: Si quieres contactarme, aquí mis coordenadas:{' '}
        </small>
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/pataruco"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <picture>
              <GitHubLogo />
            </picture>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pataruco/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <picture>
              <LinkedinLogo />
            </picture>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/pataruco"
            target="_blank"
            rel="noreferrer"
            title="twiter"
          >
            <picture>
              <TwitterLogo />
            </picture>
          </a>
        </li>
      </ul>
      <p>
        <small>
          y{' '}
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
