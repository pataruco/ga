import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Footer } from '@shared/components';
import Page from '../components/page';

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
    <Header />
    <StyledMain>
      <article>
        <h1>JSD final project brief</h1>
        <section>
          <h2>Overview</h2>
          <p>
            For the final project, you'll be designing and building a web app of
            your choice.
          </p>
          <p>
            This project will test your knowledge of JavaScript and ask you to
            apply everything you've learned in this course.
          </p>
          <p>
            The result will be a web app that you can add to your portfolio.
          </p>
          <p>
            You could create anything from: a blog users can comment on; an app
            that allows users to search for social media posts; or even an
            application that logs users geolocations.
          </p>
          <p>
            Work with your instructor to create project goals that are realistic
            given the scope and timing of the class.
          </p>
        </section>
        <section>
          <h2>Technical Requirements</h2>
          <p>
            Use JavaScript to correctly structure the code for a web
            application:
          </p>
          <ul>
            <li>
              Structure your application to be a SPA (single page application)
            </li>
            <li>Make HTTP requests to your own Firebase URL</li>
            <li>Make at least one HTTP request to a third-party server</li>
            <li>CRUD functionality should be present</li>
            <li>Use vanilla JS to perform DOM manipulation</li>
            <li>Listen for events and add interactivity based on user input</li>
          </ul>
          <h3>Hosting</h3>
          <p>App must be hosted on either GitHub Pages</p>
        </section>
        <section>
          <h2>Necessary Deliverables</h2>
          <ul>
            <li>
              A <span className="bold">production ready web application</span>,
              SPA, hosted live on the web.
            </li>
            <li>
              A{' '}
              <span className="bold">new git repository hosted on Github</span>,
              where codebase is maintained
            </li>
            <li>
              A 5-10 minute <span className="bold">presentation</span> including
              3 technical hurdles, 2 new things you learned, Q&A.
            </li>
          </ul>
        </section>
        <section>
          <h2>Suggested Ways to Get Started</h2>
          <ul>
            <li>
              Think of a problem in the world, or even in your personal life,
              and apply what you've learned to build an application that can
              help solve the issue.
            </li>
            <li>
              Research different APIs (i.e. twitter) and see what kind of
              information you can use from them.
            </li>
          </ul>
        </section>
        <section>
          <h2>Project Feedback + Evaluation</h2>
          <ul>
            <li>
              <span className="bold">Technical Requirements</span>: Did you
              deliver a project that met all the technical requirements? Given
              what the class has covered so far, did you build something that
              was reasonably complex?
            </li>
            <li>
              <span className="bold">Creativity</span>: Did you added a personal
              spin or creative element into your project submission?
            </li>
            <li>
              <span className="bold">Code Quality</span>: Did you follow code
              style guidance and best practices covered in class, such as tab
              indentation, DRYness, and semantic naming? Did you comment your
              code?
            </li>
            <li>
              <span className="bold">Problem Solving</span>: Are you able to
              defend why you implemented your solution in a certain way?
            </li>
            <li>
              <span className="bold">Total</span>: Your instructor will give you
              a total score on your project between
              <table>
                <thead>
                  <tr>
                    <th>Score</th>
                    <th>Expectations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="bold">0</span>
                    </td>
                    <td>
                      <span className="italic">Does not meet expectations</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="bold">1</span>
                    </td>
                    <td>
                      <span className="italic">
                        Meets expectactions, good job
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="bold">2</span>
                    </td>
                    <td>
                      <span className="italic">
                        Exceeds expectations, you wonderful creature!
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </section>
      </article>
    </StyledMain>
    <Footer />
  </Page>
);

export default FinalProjectBrief;
