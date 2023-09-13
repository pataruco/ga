import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header, { Weeks } from './index';
import { store } from '../../redux/store';

describe('Header', () => {
  const ProviderWrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  it('should render', () => {
    const { getByText } = render(
      <ProviderWrapper>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ProviderWrapper>,
    );
    expect(getByText(/Bonus lessons/i)).toBeInTheDocument();
  });

  describe('Weeks', () => {
    it('should render', async () => {
      render(
        <ProviderWrapper>
          <BrowserRouter>
            <Weeks />
          </BrowserRouter>
        </ProviderWrapper>,
      );

      const list = await screen.findAllByText(/Week/i);
      expect(list.length).toBe(10);
    });
  });
});
