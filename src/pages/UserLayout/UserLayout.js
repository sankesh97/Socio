import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

const UserLayout = () => {
  return (
    <>
      <div className='vh-100'>
        <Header></Header>
        <div className='container-fluid mh-100'>
          <div className='row py-3 mh-100'>
            <div className='col-md-3 text-teal px-2 mh-100 order-2 order-md-1'>
              <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-md-6 px-2 mh-100 order-3 order-md-2'>
              <Outlet />
            </div>
            <div className='col-md-3 px-2 mh-100 order-1 order-md-3'>
              <RightSideBar></RightSideBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLayout;
