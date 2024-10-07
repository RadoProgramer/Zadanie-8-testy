import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
