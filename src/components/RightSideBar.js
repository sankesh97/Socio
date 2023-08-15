import { useContext, useState } from 'react';
import Card from './Card';
import { UsersContext } from '../context/UsersContext';
import FollowButton from './FollowButton';

const RightSideBar = () => {
  const { userList } = useContext(UsersContext);
  const [searchText, setSearchText] = useState();
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
                  ? user.firstName
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    user.lastName
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    user.userName
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  : false
              )
              .map((user) => (
                <div
                  key={user._id}
                  className='d-flex my-3 justify-content-around border border-dark'
                >
                  <img
                    src={user.Avatar}
                    className='rounded-circle'
                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                    alt={user.userName}
                  />
                  <div className='mx-2'>
                    <h6>{user.firstName}</h6>
                    <p>{`@${user.userName}`}</p>
                  </div>
                  <FollowButton />
                </div>
              ))}
        </div>
      </Card>
      <div></div>
    </div>
  );
};
export default RightSideBar;
