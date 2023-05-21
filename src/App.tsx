import { RouterProvider } from 'react-router-dom';
import { getAppRouter } from './components/router/Router';

import './styles/index.scss';

const router = getAppRouter();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
