import { Formik, Form } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/Button/Button';

const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  const loginSchema = Yup.object().shape({
    userName: Yup.string().required('UserName is Required'),
    password: Yup.string().required('Password is Required'),
  });

  return (
    <div className='col-md p-5 d-flex flex-column justify-content-center '>
      <h1 className='fw-bold text-center text-teal'>Socio</h1>
      <h4 className='text-teal text-center'> Login </h4>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          userName: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          loginHandler(values);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>
                userName
              </label>
              <input
                type='text'
                name='userName'
                id='userName'
                value={values.userName}
                onChange={handleChange}
                isvalid={touched.userName && !errors.userName}
                className='form-control'
                aria-describedby='userNameHelpBlock'
              />
              <div id='userNameHelpBlock' className='form-text'>
                {errors.userName}
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                name='password'
                type='password'
                id='password'
                className='form-control'
                value={values.password}
                onChange={handleChange}
                isvalid={touched.password && !errors.password}
                aria-describedby='passwordHelpBlock'
              />
              <div id='passwordHelpBlock' className='form-text'>
                {errors.password}
              </div>
            </div>
            <Button type='submit'>Submit</Button>
            <br />
            <br />
          </Form>
        )}
      </Formik>
      <br />
      <Button
        type='button'
        onclick={() => {
          loginHandler({
            userName: 'chicku97',
            password: 'Chicku97',
          });
        }}
      >
        Login as a Guest
      </Button>
    </div>
  );
};
export default Login;
