
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loginpage from './pages/Loginpage';
import Registration from './pages/Registration';
import AdminLogin from './pages/AdminLogin';
import GetData from './pages/GetData';
import EditData from './pages/EditData';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loginpage/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
