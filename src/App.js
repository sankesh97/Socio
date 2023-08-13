import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LandingLayout from './Pages/LandingLayout/LandingLayout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Landing from './Pages/Landing/Landing';
import UserLayout from './Pages/UserLayout/UserLayout';
import Profile from './Pages/Profile/Profile';
import Explore from './Pages/Explore/Explore';
import Bookmark from './Pages/Bookmark/Bookmark';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <div className='container-fluid px-0'>
        <Routes>
          <Route path='/' element={<LandingLayout />}>
            <Route path='/' element={<Landing />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
          <Route path='/user' element={<UserLayout />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='profile/:userId' element={<Profile />}></Route>
            <Route path='explore' element={<Explore />}></Route>
            <Route path='bookmark' element={<Bookmark />}></Route>
            <Route path=':_id' element={<Profile />}></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default App;
