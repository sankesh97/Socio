import { NavLink } from 'react-router-dom';
import Card from './Card';

const RightSideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-between sticky-md-top'>
      <Card>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='searchInput'
            placeholder='password'
          />
          <label htmlFor='searchInput'>Search Posts, People </label>
        </div>
      </Card>
      <div></div>
    </div>
  );
};
export default RightSideBar;
