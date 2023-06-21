import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';

function App() {
  return (
    <div className='container-fluid px-0'>
      <Routes>
        {!localStorage.getItem('token') ? (
          <Route path='/' element={<Landing />}></Route>
        ) : (
          <Route path='/' element={<Users />}></Route>
        )}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
      {console.log(localStorage.getItem('token'))}
    </div>
  );
}

export default App;
