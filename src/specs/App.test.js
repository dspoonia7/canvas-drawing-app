import React from 'react';
import { render } from '@testing-library/react';
import App from '../js/App';

test('renders Canvas Drawing Board', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Canvas Drawing Board/i);
  expect(linkElement).toBeInTheDocument();
});
