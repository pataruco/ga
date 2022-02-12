const sessionsElement = document.querySelector('.sessions');
const sessionTemplate = document.querySelector('template');

const sessions = [
  {
    title: 'Advances in Wasp Farming',
    presenter: 'Cassandra Fleming',
    day: 'Monday',
    start: '12:30',
    end: '2:00',
    summary: 'Recent advances and trends among wasp farmers',
  },
  {
    title: '101 Uses for Beetles',
    presenter: 'Omar Hassan',
    day: 'Tuesday',
    start: '9:30',
    end: '11:00',
    summary: "What can you do with beetles? What CAN'T you do with beetles!",
  },
  {
    title: 'Good or Weevil?',
    presenter: "Terrance O'Halloran & Amy Wong",
    day: 'Monday',
    start: '4:00',
    end: '5:30',
    summary:
      'Debate: Do weevils just get a bad rap, or are they an unredeemable scourge?',
  },
];

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
  presenterElement.innerText = presenter;
  summaryElement.innerText = summary;

  sessionsElement.appendChild(sessionClone);
};

// Another solution

const renderSessionUsingTemplateLiterals = (session) => {
  const { title, presenter, day, start, end, summary } = session;

  const articleElement = document.createElement('article');
  articleElement.classList.add('session');

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

sessions.forEach((session) => {
  renderSessionUsingTemplateLiterals(session);
  // renderSession(session);
});
