import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';

const LeftSideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-between'>
      <Card>
        <div className='d-grid gap-2'>
          <NavLink className='btn btn-outline-dark' to='/home'>
            <i className='bi bi-house'></i> Home
          </NavLink>

          <NavLink className='btn btn-outline-dark' to='/explore'>
            <i className='bi bi-rocket-takeoff'></i> Explore
          </NavLink>

          <NavLink className='btn btn-outline-dark' to='/bookmark'>
            <i className='bi bi-bookmark-heart'></i> Bookmark
          </NavLink>

          <NavLink className='btn btn-outline-dark' to='/profile'>
            <i className='bi bi-person'></i> Profile
          </NavLink>

          <NavLink className='btn btn-outline-dark' to='/profile'>
            <i className='bi bi-plus-square'></i> Create New Post
          </NavLink>
        </div>
      </Card>
    </div>
  );
};
export default LeftSideBar;
