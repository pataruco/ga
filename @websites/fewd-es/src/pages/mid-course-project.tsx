import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Title, Footer } from '@shared/components';
import Page from '../components/page';
import { COURSE_NAME } from '../lib/get-lesson-path';

const StyledMain = styled.main`
  padding: 1.25rem;
  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
  }
`;

const FinalProjectBrief: React.FC = () => (
  <Page>
    <Title courseName={COURSE_NAME} title="Proyecto de mitad de curs" />
    <Header />
    <StyledMain>
      <article>
        <h1>Proyecto de mitad de curso</h1>
        <p>
          El proyecto de mitad de curso será diseñar y construir un sitio web de
          tu elección. Este proyecto pondrá a prueba tu conocimiento de
          desarrollo de fron-end y resume todo lo que has aprendido sobre HTML y
          CSS en este curso. El resultado será un sitio que podrás usar en tu
          portafolio.
        </p>
        <p>El objetivo de este proyecto es:</p>
        <ul>
          <li>Demostrar comprensión de HTML y CSS.</li>
          <li>
            Aplicar tus conocimientos mediante la creación de un sitio web desde
            cero.
          </li>
        </ul>
        <section>
          <h2>Requisitos básicos</h2>
          <h3>HTML semántico</h3>
          <ul>
            <li>
              Demostrar el proceso de planificación y construcción de un sitio
              web desde cero.
            </li>
            <li>
              Utiliza HTML para describir correctamente el contenido y la
              estructura del página.
            </li>
            <li>
              Usa elementos estructurales de HTML5 (<code>header</code>,{' '}
              <code>footer</code>, <code>main</code>, <code>nav</code>,{' '}
              <code>section</code>, etc.).
            </li>
            <li>Demuestra el uso correcto de clases y ID.</li>
            <li>
              Selecciona las etiquetas apropiadas para marcar el contenido.
            </li>
          </ul>
          <h3>Estilo con CSS</h3>
          <ul>
            <li>Demostrar el uso del modelo de caja y flexbox y/o grids.</li>
            <li>
              Utiliza un diseño responsivo, adaptable a los siguientes tamaños:
              mobil, tableta, escritorio.
            </li>
          </ul>
        </section>
        <section>
          <h2>Hitos sugeridos </h2>
          <ol>
            <li>
              <span className="bold">Semana 1</span>: Propuesta de proyecto /
              wireframes.
            </li>
            <li>
              <span className="bold">Semana 2</span>: Estructura HTML y pseudo
              código.
            </li>
            <li>
              <span className="bold">Semana 3</span>: Estilo con CSS.
            </li>
            <li>
              <span className="bold">Semana 4</span>: Estilo para responsivo.
            </li>
            <li>
              <span className="bold">Semana 5</span>: Presentaciones{' '}
              <time dateTime="2022-05-25">25/05/2022</time>.
            </li>
          </ol>
        </section>
        <section>
          <h2>Entregables</h2>
          <p>
            Repositorio hospedado en GitHub con HTML/CSS y todos los recursos
            necesarios.
          </p>
        </section>
        <section>
          <h2>Alcance / Expectativas</h2>
          <p>
            Sugerimos empezar con{' '}
            <span className="italic">una sola página</span> de un website,
            ejemplo: el homepage.
          </p>
          <p>
            Si tiene tiempo y la inclinación, sientete libre de construir
            múltiples páginas y funcionalidades.
          </p>
          <p>
            Seguir las mejores prácticas de la industria en relación a código
            limpio y legible es aconsejado pero no esencial. El objetivo no es
            escribir código perfecto y profesional, es construir algo que
            quieras hacer y tener algo tangible para poder demostrar tus nuevas
            habilidades a posibles empleadores.
          </p>
        </section>
        <section>
          <h2>Calificación</h2>
          <p>
            No hay grado ni nota, solo aprobado o reprobado entregando un
            proyecto (a tiempo) que cumpla con todos los requisitos arriba
            expuestos
          </p>

          <p></p>
          <p>
            Utiliza el proyecto como una oportunidad para crear algo que{' '}
            <span className="bold">TU</span> quieras hacer. Experimenta con lo
            que hemos aprendido y divertiete!
          </p>
        </section>
        <section>
          <h2>Compromiso de tiempo</h2>
          <p>
            Tienes 5 semanas para poder hacer tu proyecto en paralelo con tus
            tareas.
          </p>
          <p>
            Te sugerimos que uses aproximadamente 5 horas por semana en tu
            proyecto, pero comprometete el tiempo que puedas
          </p>
        </section>
      </article>
    </StyledMain>
    <Footer />
  </Page>
);

export default FinalProjectBrief;
