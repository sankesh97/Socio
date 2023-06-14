import './Button.css';

const Button = ({ children }) => {
  return (
    <button className='btn btn-teal' type='button'>
      {children}
    </button>
  );
};

export default Button;
