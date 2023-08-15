import { useContext, useState } from 'react';
import { UsersContext } from '../context/UsersContext';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Card from './Card';
import FollowButton from './FollowButton';

const RightSideBar = () => {
  const { userList } = useContext(UsersContext);
  const [searchText, setSearchText] = useState();
  const { loggedInUser } = useContext(AuthContext);
  return (
    <div className='d-flex flex-column justify-content-between sticky-md-top my-2'>
      <Card>
        <div className='form-floating my-2'>
          <input
            type='text'
            className='form-control'
            id='searchInput'
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            placeholder='password'
          />
          <label htmlFor='searchInput'>Search People</label>
        </div>
        <div>
          {userList &&
            userList
              .filter((user) =>
                searchText
                  ? user._id !== loggedInUser._id &&
                    (user.firstName
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                      user.lastName
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                      user.userName
                        .toLowerCase()
                        .includes(searchText.toLowerCase()))
                  : false
              )
              .map((user) => (
                <div
                  key={user._id}
                  className='d-flex p-3 justify-content-between border'
                >
                  <NavLink to={`/user/${user._id}`}>
                    <img
                      src={user.Avatar}
                      className='rounded-circle'
                      style={{ maxWidth: '30px', maxHeight: '30px' }}
                      alt={user.userName}
                    />
                  </NavLink>
                  <NavLink
                    className='text-decoration-none text-light mx-2'
                    to={`/user/${user._id}`}
                  >
                    <h6>{user.firstName + ' ' + user.lastName}</h6>
                  </NavLink>

                  <div>
                    <FollowButton userId={user._id} />
                  </div>
                </div>
              ))}
        </div>
      </Card>
      <div></div>
    </div>
  );
};
export default RightSideBar;
