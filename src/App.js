import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LandingLayout from './pages/LandingLayout/LandingLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className='container-fluid px-0'>
      <Routes>
        {!localStorage.getItem('token') ? (
          <Route path='/' element={<LandingLayout />}>
            <Route path='/' element={<Landing />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
        ) : (
          <Route path='/' element={<Users />}></Route>
        )}
        <Route path='/home' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
      {console.log(localStorage.getItem('token'))}
    </div>
  );
}

export default App;
