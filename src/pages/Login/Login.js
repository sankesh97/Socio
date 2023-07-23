import { useFormik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/Button/Button';

const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Password is a required field')
        .min(3, 'Password must be at least 8 characters'),
    }),
    onSubmit: (values) => {
      loginHandler(values);
    },
  });

  return (
    <div className='col-md p-5 d-flex flex-column justify-content-center '>
      <h1 className='fw-bold text-center text-teal'>Socio</h1>
      <h4 className='text-teal text-center'> Login </h4>
      <br />
      <div className='d-flex justify-content-center'>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='InputEmail' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='InputEmail'
              aria-describedby='EmailHelp'
              {...formik.getFieldProps('userName')}
            />
            <div id='EmailHelp' className='form-text'>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='InputPassword' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='InputPassword'
              aria-describedby='PasswordHelp'
              {...formik.getFieldProps('password')}
            />
          </div>
          <div id='PasswordHelp' className='form-text'>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </div>
          {/* <button type='submit' className='btn btn-primary btn-teal'>
                    Submit
                  </button> */}
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
