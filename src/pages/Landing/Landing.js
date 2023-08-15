import Button from '../../components/Button/Button';

const Landing = () => {
  return (
    <>
      <div className='col-md p-3 p-md-5 d-flex flex-column justify-content-between text-center '>
        <h1 className='fw-bold'>
          <span className='text-teal'>Socio</span>
        </h1>
        <h4 className='text-teal'>The Social Networking App </h4>
        <div className='d-flex justify-content-around'>
          <h3>
            <i className='bi bi-people-fill'></i> Meet
          </h3>
          <h3>
            <i className='bi bi-person-badge-fill'></i> Greet
          </h3>
          <h3>
            <i className='bi bi-arrow-repeat'></i> Repeat
          </h3>
        </div>
        <br />
        <div className='d-grid gap-2'>
          <Button to='/register'>Join Now</Button>
          <Button to='/login'>Already Have an Account ?</Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
