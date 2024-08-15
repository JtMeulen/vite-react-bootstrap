import { Navigate, Route, Link as RouterLink, Routes } from 'react-router-dom';

import { HelloWorld } from '@/components/HelloWorld/HelloWorld';
import { Users } from '@/components/Users/Users';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/users">Users</RouterLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};
