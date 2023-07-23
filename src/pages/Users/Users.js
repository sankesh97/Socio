import Header from '../../components/Header/Header';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import Profile from '../Profile/Profile';

const Users = () => {
  return (
    <div className='vh-100'>
      <Header></Header>
      <div className='container-fluid h-100'>
        <div className='row py-3 h-100'>
          <div className='col-md-3 text-teal h-100 px-2'>
            <LeftSideBar></LeftSideBar>
          </div>
          <div className='col-md-6 px-2 vh-100'>
            <Profile></Profile>
          </div>
          <div className='col-md-3 h-100 px-2'>
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
