const sessionsElement = document.querySelector('.sessions');
const sessionTemplate = document.querySelector('template');

const sessions = {
  title: 'Advances in Wasp Farming',
  presenter: 'Cassandra Fleming',
  day: 'Monday',
  start: '12:30',
  end: '2:00',
  summary: 'Recent advances and trends among wasp farmers',
};

const renderSession = (session) => {
  const sessionClone = sessionTemplate.content.cloneNode(true);

  const titleElement = sessionClone.querySelector('.title');
  const dateTimeElement = sessionClone.querySelector('dd:first-of-type');
  const presenterElement = sessionClone.querySelector('dd:last-of-type');
  const summaryElement = sessionClone.querySelector('p');

  const { title, presenter, day, start, end, summary } = session;

  titleElement.innerText = title;
  dateTimeElement.innerText = `${day}: ${start} - ${end}`;
  presenterElement.innerText = presenter;
  summaryElement.innerText = summary;

  sessionsElement.appendChild(sessionClone);
};

// renderSession(sessions);

// Another solution

const renderSessionUsingTemplateLiterals = (session) => {
  const { title, presenter, day, start, end, summary } = session;

  const articleElement = document.createElement('article');

  articleElement.innerHTML = `
<h2 class="title">${title}</h2>
<dl>
  <dt class="label">Time:</dt>
  <dd>${day}: ${start} - ${end}</dd>
  <dt class="label">Presenter:</dt>
  <dd>${presenter}</dd>
</dl>
<p>${summary}</p>
  `;

  sessionsElement.appendChild(articleElement);
};

renderSessionUsingTemplateLiterals(sessions);
