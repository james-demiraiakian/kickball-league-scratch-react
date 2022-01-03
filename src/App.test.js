import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders home page dom', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  screen.getByText('Kickball League');

  expect(container).toMatchSnapshot();
});
