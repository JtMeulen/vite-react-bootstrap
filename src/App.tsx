import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
