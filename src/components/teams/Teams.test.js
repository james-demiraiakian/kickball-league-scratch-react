import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

it('renders a teams details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Teams name="Namethaniel" city="Citsbourough" state="Stateifornia" selected={true} id={1} />
    </MemoryRouter>
  );
  screen.getByText('Namethaniel');

  expect(container).toMatchSnapshot();
});
