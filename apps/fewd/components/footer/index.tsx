import './style.scss';

import React from 'react';

const createTimeStamp = () => {
  // @ts-ignore
  if (!process.env.NEXT_PUBLIC_TIMESTAMP) {
    return null;
  }

  // @ts-ignore
  const now = new Date(Number(process.env.NEXT_PUBLIC_TIMESTAMP) * 1000);
  const locale = 'en-GB';
  const printTimeStampOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    second: 'numeric',
    timeZone: 'Europe/London',
    timeZoneName: 'short',
    year: 'numeric',
    hour12: true,
  };

  const printTimestamp = new Intl.DateTimeFormat(
    locale,
    printTimeStampOptions,
  ).format(now);

  const dateTimestamp = now.toISOString();

  return {
    printTimestamp,
    dateTimestamp,
  };
};

export const TimeStamp: React.FC = () => {
  const timestamps = createTimeStamp();
  if (timestamps) {
    const { printTimestamp, dateTimestamp } = timestamps;
    return (
      <p>
        <small>
          Updated at: <time dateTime={dateTimestamp}>{printTimestamp}</time>
        </small>
      </p>
    );
  }
  return null;
};

const Footer: React.FC = () => (
  <footer>
    <p>
      Made with{' '}
      <span role="img" aria-labelledby="heart">
        ❤️
      </span>{' '}
      by{' '}
      <a href="https://github.com/pataruco" target="_blank" rel="noreferrer">
        @pataruco
      </a>{' '}
      {new Date().getFullYear()}
    </p>
    <TimeStamp />
  </footer>
);

export default Footer;
