import { NavLink } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, type }) => {
  const addLink = to ? (
    <NavLink style={{ textDecoration: 'none' }} to={to}>
      <button className='btn btn-teal' type={type}>
        {children}
      </button>
    </NavLink>
  ) : (
    <button className='btn btn-teal' type={type}>
      {children}
    </button>
  );
  return <>{addLink}</>;
};

export default Button;
