import Card from './Card';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LeftSideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-between sticky-md-top'>
      <Card>
        <div className='d-grid gap-2'>
          <LinkContainer to='/user/home'>
            <Button variant='outline-light'>
              <i className='bi bi-house'></i> Home
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/explore'>
            <Button variant='outline-light'>
              <i className='bi bi-rocket-takeoff'></i> Explore
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/bookmark'>
            <Button variant='outline-light'>
              <i className='bi bi-bookmark-heart'></i> Bookmark
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/profile'>
            <Button variant='outline-light'>
              <i className='bi bi-person'></i> Profile
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/home'>
            <Button variant='outline-light'>
              <i className='bi bi-plus-square'></i> Create New Post
            </Button>
          </LinkContainer>
        </div>
      </Card>
      <div>Hello</div>
    </div>
  );
};
export default LeftSideBar;
