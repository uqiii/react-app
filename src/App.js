import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import Navbar from './Navbar';
// import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={(<Home />)} />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
