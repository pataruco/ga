import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import Footer, { TimeStamp } from './index';

describe('Footer', () => {
  it('should render', () => {
    const { getByText } = render(<Footer />);

    expect(getByText(/@pataruco/i)).toBeInTheDocument();
  });

  describe('Timestamp', () => {
    it('should render when REACT_APP_TIMESTAMP is defined', () => {
      process.env.REACT_APP_TIMESTAMP = '1643409645';
      const { getByText } = render(<TimeStamp />);

      expect(getByText(/Updated at/i)).toBeInTheDocument();
    });
  });
});
