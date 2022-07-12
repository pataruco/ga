import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Footer, Title } from '@shared/components';
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

  table {
    margin-top: 1.25rem;
  }
`;

const FinalProjectBrief: React.FC = () => (
  <Page>
    <Title courseName={COURSE_NAME} title="Proyecto final" />
    <Header />
    <StyledMain>
      <article>
        <h1>Proyecto final</h1>
        <p>
          El proyecto final es construir una aplicación React que consuma una
          API pública.
        </p>
        <section>
          <h2>Requerimientos técnicos</h2>
          <p>Tu aplicación debe:</p>
          <ul>
            <li>
              Consumir al menos una API publica: esto podría ser cualquier cosa,
              pero debe tener sentido para tu proyecto.
            </li>
            <li>Tener varios componentes.</li>
            <li>
              La aplicación puede tener un enrutador (router) con varias
              "páginas".
            </li>
            <li>
              Incluir wireframes que diseñaste antes de crear la aplicación.
            </li>
            <li>Estar en línea y accessible al público</li>
            <li>Tener tests unitarios (unit).</li>
          </ul>
        </section>
        <section>
          <h2>Entregables necesarios</h2>
          <ul>
            <li>
              Una aplicación funcional, hospedada en algún lugar de internet.
            </li>
            <li>
              Un repositorio git alojado en GitHub, con commits frecuentes que
              se remontan al inicio del proyecto.
            </li>
            <li>
              Un enlace a tu aplicación en la sección de URL de tu repositorio
              de GitHub.
            </li>
            <li>
              Un archivo <code>readme.md</code> con:
              <ul>
                <li>Explicaciones de las tecnologías utilizadas.</li>
                <li>
                  Un par de párrafos sobre el enfoque general que tomaste.
                </li>
                <li>
                  Enlace a tus wireframes - bocetos de las principales vistas /
                  interfaces en tu aplicación.
                </li>
                <li>
                  Descripciones de problemas sin resolver u obstáculos
                  importantes que tu equipo tuvo que superar.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Maneras sugeridas para comenzar</h2>
          <ul>
            <li>
              No dudes en escribir código desechable para resolver problemas a
              corto plazo.
            </li>
            <li>
              Lee los documentos para las tecnologías / librerias / API que
              utilices.
            </li>
            <li>Escribe código DRY.</li>
            <li>Se coherente con tu estilo de código.</li>
            <li>
              Haz commits tempranos y a menudo. No tengas miedo de romper algo
              porque siempre puede retroceder en el tiempo a una versión
              anterior.
            </li>
            <li>
              Manten las historias de usuario pequeñas y bien definidas, y
              recuerda: las historias de usuarios se centran en lo que necesita
              un usuario, no en las tareas de desarrollo que deben realizarse.
            </li>
            <li>
              Escribe código sobre el que otro desarrollador no tendría que
              preguntarte. ¿Tienen sentido sus convenciones de nomenclatura?
              ¿Otro desarrollador podría ver su aplicación y comprender qué es
              todo?
            </li>
            <li>
              Haga que todo esté bien formateado. ¿Está sangrando, de manera
              consistente? ¿Podemos encontrar el inicio y el final de cada div,
              llave, etc.?
            </li>
            <li>
              Comenta tu código. ¿Alguien entenderá lo que sucede en cada bloque
              o función? Incluso si es obvio, explicar el qué y el por qué
              significa que otra persona puede recogerlo y obtenerlo.
            </li>
            <li>
              Escribe pseudocódigo antes de escribir el código real. Es útil
              pensar en la lógica de algo.
            </li>
          </ul>
        </section>
        <section>
          <h2>¿Sólo o en grupo?</h2>
          <p>
            Eres libre de trabajar solo o en grupo (no más de 3 personas). Ambas
            formas tienen sus pros y sus contras. Recuerda que si estás
            trabajando en equipo, todos están en la misma página y trabajando
            hacia el mismo objetivo.
          </p>
          <p>
            Asegúrate de revisar tu propuesta de proyecto con un instructor para
            asegurarte de que sea algo que puedas lograr en el tiempo limitado
            que tienes.
          </p>
        </section>
        <section>
          <h2>Recursos útiles</h2>

          <ul>
            <li>
              <a href="https://reactjs.org/" className="external-link">
                React
              </a>
            </li>
            <li>
              <a href="https://apilist.fun/" className="external-link">
                API gratis
              </a>
            </li>
            <li>
              <a
                href="https://github.com/public-apis/public-apis"
                className="external-link"
              >
                Más API gratis
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/camerenisonfire/10-intriguing-public-rest-apis-for-your-next-project-2gbd"
                className="external-link"
              >
                Aun más API gratis
              </a>
            </li>
          </ul>
        </section>
      </article>
    </StyledMain>
    <Footer />
  </Page>
);

export default FinalProjectBrief;
