import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import Navbar from './Navbar';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={(<RequireAuth allowedRoles={['USER', 'ADMIN']} />)}>
            <Route path="/" element={(<Home />)} />
          </Route>
          <Route element={(<RequireAuth allowedRoles={['USER']} />)}>
            <Route path="/profile" element={<Profile />} exact />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
