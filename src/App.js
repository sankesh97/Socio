import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LandingLayout from './pages/LandingLayout/LandingLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Landing from './pages/Landing/Landing';
import UserLayout from './pages/UserLayout/UserLayout';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import Bookmark from './pages/Bookmark/Bookmark';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import { RequiresAuth } from './components/RequiresAuth';

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
            <Route
              path='home'
              element={
                <RequiresAuth>
                  <Home />
                </RequiresAuth>
              }
            ></Route>
            <Route
              path='profile'
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            ></Route>
            <Route
              path='explore'
              element={
                <RequiresAuth>
                  <Explore />
                </RequiresAuth>
              }
            ></Route>
            <Route
              path='bookmark'
              element={
                <RequiresAuth>
                  <Bookmark />
                </RequiresAuth>
              }
            ></Route>
            <Route
              path=':userId'
              element={
                <RequiresAuth>
                  <Profile />
                </RequiresAuth>
              }
            ></Route>
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
