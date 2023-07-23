import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const UserLayout = () => {
  return (
    <>
      <div className='vh-100'>
        <Header></Header>
        <div className='container-fluid h-100'>
          <div className='row py-3 h-100'>
            <div className='col-md-3 text-teal px-2'>
              <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-md-6 px-2'>
              <Outlet />
            </div>
            <div className='col-md-3 px-2'>
              <RightSideBar></RightSideBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLayout;
