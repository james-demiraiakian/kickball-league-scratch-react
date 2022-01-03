import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('render team details', async () => {
  const { container } = render(
    <MemoryRouter>
      <TeamDetail match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Stumptown Lumberjacks');
  expect(container).toMatchSnapshot();
});
