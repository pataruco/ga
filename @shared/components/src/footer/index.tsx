import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--black);
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;

  p {
    color: var(--white);
    text-align: center;
    max-width: 100%;
    span {
      color: red;
    }

    a {
      color: var(--white);
      &:hover {
        text-decoration: underline 2px solid white;
      }
    }
  }

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      justify-content: flex-start;
    }

    p {
      text-align: start;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

const createTimeStamp = () => {
  if (!process.env.REACT_APP_TIMESTAMP) {
    return null;
  }

  const now = new Date(Number(process.env.REACT_APP_TIMESTAMP) * 1000);
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
  <StyledFooter>
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
  </StyledFooter>
);

export default Footer;
