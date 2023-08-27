import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, type, onclick }) => {
  const navigate = useNavigate();
  const addLink = to ? (
    <button
      onClick={() => {
        navigate(to);
      }}
      className='btn btn-teal'
      type={type}
    >
      {children}
    </button>
  ) : (
    <button onClick={onclick} className='btn btn-teal' type={type}>
      {children}
    </button>
  );
  return <>{addLink}</>;
};

export default Button;
