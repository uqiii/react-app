import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import Navbar from './Navbar';
import RequireAuth from './RequireAuth';
import { Missing } from './Pages/Missing';
import { UserManagement } from './Pages/UserManagement';

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
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
          <Route element={(<RequireAuth allowedRoles={['ADMIN']} />)}>
            <Route path="/user-management" element={<UserManagement />} exact />
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
