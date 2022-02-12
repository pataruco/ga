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
