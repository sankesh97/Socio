import { useContext, useState } from 'react';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { Form, Formik } from 'formik';

const Register = () => {
  const { signupHandler } = useContext(AuthContext);

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string()
      .required('Email is Required')
      .email('Must be a valid email address'),
    userName: Yup.string().required('User Name is Required'),
    password: Yup.string()
      .required('Password is Required')
      .min(5, 'Your password is too short.'),
    confirmPassword: Yup.string()
      .required('Confirm Password is Required')
      .oneOf([Yup.ref('password')], 'Passwords do not match!'),
  });

  const [showPass, setShowPass] = useState(false);

  return (
    <div className='col-md p-5 d-flex flex-column justify-content-center '>
      <h1 className='fw-bold text-center text-teal'>Socio</h1>
      <h4 className='text-teal text-center'> Register </h4>
      <br />
      <div className='d-flex justify-content-center'>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            signupHandler(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
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
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  aria-describedby='firstNameHelpBlock'
                  required
                />
                <div id='firstNameHelpBlock' className='form-text'>
                  {errors.firstName}
                </div>
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
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  aria-describedby='lastNameHelpBlock'
                  required
                />
                <div id='lastNameHelpBlock' className='form-text'>
                  {errors.lastName}
                </div>
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
                  value={values.userName}
                  onChange={handleChange}
                  isValid={touched.userName && !errors.userName}
                  aria-describedby='userNameHelpBlock'
                  required
                />
                <div id='userNameHelpBlock' className='form-text'>
                  {errors.userName}
                </div>
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
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  aria-describedby='emailHelpBlock'
                  required
                />
                <div id='emailHelpBlock' className='form-text'>
                  {errors.email}
                </div>
              </div>
              {/* Password */}
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <div className='mb-3'>
                <div className='input-group'>
                  <input
                    type={showPass ? 'text' : 'password'}
                    className='form-control'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    aria-describedby='passwordHelpBlock'
                    required
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
                <div id='passwordHelpBlock' className='form-text'>
                  {errors.password}
                </div>
              </div>
              {/* Confirm Password */}
              <label htmlFor='confirmPassword' className='form-label'>
                Confirm Password
              </label>
              <div className='mb-3'>
                <div className='input-group'>
                  <input
                    type={showPass ? 'text' : 'password'}
                    className='form-control'
                    id='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                    aria-describedby='confirmPasswordHelpBlock'
                    required
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
                <div id='confirmPasswordHelpBlock' className='form-text'>
                  {errors.confirmPassword}
                </div>
              </div>

              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
