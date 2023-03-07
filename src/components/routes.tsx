import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const routesConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <h1>About</h1>,
  },
]);
