import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { routesConfig } from '../components/routes';

const renderApp = () => {
  render(<RouterProvider router={routesConfig} />);
};

const teste = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <h1>About</h1>,
  },
];

describe('App', () => {
  it('Render App Function ... ', () => {
    renderApp();

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Verifica se esse negocio funciona ou não, url é about mesmo ... ', async () => {
    // esse teste é o mesmo array usado la pelo CreateBrowerRouter

    const router = createMemoryRouter(teste, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
  it('Funciona com o clique no botao ', async () => {
    const router = createMemoryRouter(teste, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const link = screen.getByRole('link');

    await waitFor(() => userEvent.click(link));

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });
});
