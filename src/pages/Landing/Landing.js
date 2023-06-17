import landingImage from '../../assets/landingPageImg.svg';
import Button from '../../components/Button/Button';
import './Landing.css';

const Landing = () => {
  return (
    <div className='container'>
      <div className='min-vh-100 d-flex flex-column justify-content-center'>
        <div className='card greenBorderTeal'>
          <div className='card-body row'>
            <div className='col-md p-5'>
              <img src={landingImage} alt='Socio Icon' className='w-100' />
            </div>
            <div className='col-md p-5 d-flex flex-column justify-content-between text-center '>
              <h1 className='fw-bold'>
                <span className='text-teal'>Socio</span>
              </h1>
              <h4 className='text-teal'>The Social Networking App </h4>
              <div className='d-flex justify-content-between'>
                <h3>
                  <i className='bi bi-people-fill'></i> Meet
                </h3>
                <h3>
                  <i className='bi bi-person-badge-fill'></i> Greet
                </h3>
                <h3>
                  <i className='bi bi-arrow-repeat'></i>Repeat
                </h3>
              </div>
              <div className='d-grid gap-2'>
                <Button to='/register'>Join Now</Button>
                <Button to='/login'>Already Have an Account ?</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
