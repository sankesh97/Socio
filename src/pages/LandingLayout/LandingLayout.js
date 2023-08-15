import { Outlet } from 'react-router-dom';
import landingImage from '../../assets/landingPageImg.svg';
import './LandingLayout.css';

const LandingLayout = () => {
  return (
    <div className='container-fluid'>
      <div className='vh-100 py-3 p-md-5'>
        <div className='card greenBorderTeal'>
          <div className='card-body row'>
            <div className='col-md p-5 d-flex align-items-center'>
              <img src={landingImage} alt='Company Icon' className='w-100' />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingLayout;
