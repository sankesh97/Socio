import { NavLink } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { logoutHandler } = useContext(AuthContext);
  return (
    <>
      <nav className='navbar py-2'>
        <div className='container'>
          <NavLink style={{ textDecoration: 'none' }} to='/user/home'>
            <h1 className='navbar-brand'>Socio</h1>
          </NavLink>
          <button
            className='btn btn-dark'
            onClick={() => {
              logoutHandler();
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
