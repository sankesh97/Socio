import landingImage from '../../assets/landingPageImg.svg';
import Button from '../../components/Button/Button';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <div className='container'>
        <div className='min-vh-100 d-flex flex-column justify-content-center'>
          <div class='card greenBorderTeal'>
            <div class='card-body row'>
              <div className='col-md p-5'>
                <img
                  src={landingImage}
                  alt='Landing Page Image for Signup'
                  className='w-100'
                />
              </div>
              <div className='col-md p-5 d-flex flex-column justify-content-between text-center '>
                <h1 className='fw-bold'>
                  <span className='text-teal'>Socio</span>
                </h1>
                <h4 className='text-teal'>The Social Networking App </h4>
                <div className='d-flex justify-content-between'>
                  <h3>
                    <i class='bi bi-people-fill'></i> Meet
                  </h3>
                  <h3>
                    <i class='bi bi-person-badge-fill'></i> Greet
                  </h3>
                  <h3>
                    <i class='bi bi-arrow-repeat'></i>Repeat
                  </h3>
                </div>
                <div class='d-grid gap-2'>
                  <Button>Join Now</Button>
                  <Button>Already Have an Account ?</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
