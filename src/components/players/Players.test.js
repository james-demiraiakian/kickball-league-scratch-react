import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

it('renders player detail', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players name="Greorge" position="Over There" selected={true} />
    </MemoryRouter>
  );

  screen.getByText('Over There');

  expect(container).toMatchSnapshot();
});
