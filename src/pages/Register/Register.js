import { useContext, useState } from 'react';

import { AuthContext } from '../../Context/AppContext';
import Button from '../../Components/Button/Button';

const Register = () => {
  const { signupHandler } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });
  const [showPass, setShowPass] = useState(false);

  const onChangeHandler = (id, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <div className='col-md p-5 d-flex flex-column justify-content-center '>
      <h1 className='fw-bold text-center text-teal'>Socio</h1>
      <h4 className='text-teal text-center'> Register </h4>
      <br />
      <div className='d-flex justify-content-center'>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signupHandler(formValues);
          }}
        >
          {/* First Name */}
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              className='form-control'
              name='firstName'
              id='firstName'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
              required
            />
          </div>
          {/* Last Name */}
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
              required
            />
          </div>
          {/* User Name */}
          <div className='mb-3'>
            <label htmlFor='UserName' className='form-label'>
              User Name
            </label>
            <input
              type='text'
              className='form-control'
              id='userName'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
              required
            />
          </div>
          {/* Email */}
          <div className='mb-3'>
            <label htmlFor='InputEmail' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
              aria-describedby='EmailHelp'
            />
          </div>
          {/* Password */}
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <div className='mb-3 input-group'>
            <input
              type={showPass ? 'text' : 'password'}
              className='form-control'
              id='password'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
            />
            <span
              className='input-group-text'
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <i className='bi bi-eye-slash'></i>
              ) : (
                <i className='bi bi-eye'></i>
              )}
            </span>
          </div>
          {/* Confirm Password */}
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <div className='mb-3 input-group'>
            <input
              type={showPass ? 'text' : 'password'}
              className='form-control'
              id='confirmPassword'
              onChange={(event) => {
                onChangeHandler(event.target.id, event.target.value);
              }}
            />
            <span
              className='input-group-text'
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <i className='bi bi-eye-slash'></i>
              ) : (
                <i className='bi bi-eye'></i>
              )}
            </span>
          </div>

          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default Register;
