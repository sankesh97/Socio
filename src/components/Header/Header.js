import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className='navbar py-2'>
        <div className='container'>
          <NavLink style={{ textDecoration: 'none' }} to='/'>
            <h1 className='navbar-brand'>Socio</h1>
          </NavLink>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'></div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </>
  );
};

export default Header;
