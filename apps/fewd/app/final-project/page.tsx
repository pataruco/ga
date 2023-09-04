'use client';

import 'normalize.css';
import '../../styles/site/index.scss';

import { Footer } from '@ga/components';
import styled from 'styled-components';

import Header from '../../components/header';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  min-height: 100vh;
  position: relative;

  main {
    flex: 1 auto;
    padding: 1.25rem;

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
  }
`;

export default async function Index() {
  return (
    <StyledPage>
      <Header />
      <main>
        <article>
          <h1>FEWD final project brief</h1>
          <p>
            The final project for FEWD will be to design and build a website of
            your choice. This project will test your knowledge of front-end web
            development, and it encapsulates everything you’ve learned in this
            course. The result will be a site that can be used in your
            portfolio.
          </p>
          <p>The objective of this project is to:</p>
          <ul>
            <li>To demonstrate understanding of HTML, CSS and JS</li>
            <li>
              To apply your knowledge by building a website from the ground up.
            </li>
          </ul>
          <section>
            <h2>Core requirements</h2>
            <h3>Semantic HTML</h3>
            <ul>
              <li>Demonstrate the process to plan and build your website</li>
              <li>
                Use HTML to correctly describe the content and structure of the
                page
              </li>
              <li>
                Use HTML5 structural elements (<code>header</code>,{' '}
                <code>footer</code>, <code>main</code>, <code>nav</code>,{' '}
                <code>section</code>, etc.).
              </li>
              <li>Demonstrates correct use of classes and IDs</li>
              <li>Selects appropriate tags to markup content.</li>
            </ul>
            <h3>Styled with CSS</h3>
            <ul>
              <li>Demonstrate apply fonts, color to a page.</li>
              <li>Demonstrate use of the box model and flexbox.</li>
              <li>Uses responsive design (optional)</li>
            </ul>
            <h3>Interactive</h3>
            <ul>
              <li>
                Make use of JavaScript events to add interactivity to the page.
              </li>
            </ul>
          </section>
          <section>
            <h2>Milestones</h2>
            <ol>
              <li>
                <span className="bold">Week 06</span>: Project proposal /
                wireframes
              </li>
              <li>
                <span className="bold">Week 08</span>: HTML structure and pseudo
                code
              </li>
              <li>
                <span className="bold">Week 09</span>: First Draft
              </li>
              <li>
                <span className="bold">Week 10</span>: Presentation!
              </li>
            </ol>
          </section>
          <section>
            <h2>Deliverables</h2>
            <p>Project folder with HTML/CSS, JS and all necessary assets.</p>
          </section>
          <section>
            <h2>Scope / Expectations</h2>
            <p>
              We suggest starting with a{' '}
              <span className="italic">single page</span> of a website - eg. the
              homepage.
            </p>
            <p>
              If you have time and the inclination, do feel free to build out
              multiple pages and functionality.
            </p>
            <p>
              Following industry best practices of clean and readable code is
              advised but not essential. The goal is not to write perfect,
              professional code, it's to build something that you want to build
              so you have something tangible to show for your new found skills.
            </p>
          </section>
          <section>
            <h2>Grading</h2>
            <p>There is no grade or mark, or pass or fail.</p>
            <p>
              Use the project as an opportunity to create something that{' '}
              <span className="bold">YOU</span> want to create. Experiment with
              what we've learned and have fun!
            </p>
          </section>
          <section>
            <h2>Time commitment</h2>
            <p>
              From week 5 onwards there will be no official homework. Use the
              out of class time to work on your project. We suggest spending
              approximately 5 hours per week on your project but commit whatever
              time you can.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </StyledPage>
  );
}
