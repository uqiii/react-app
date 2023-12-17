import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
// import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={(<Home />)} />
      <Route path="/profile" element={<Profile />} exact />
    </Routes>
  );
}

export default App;
