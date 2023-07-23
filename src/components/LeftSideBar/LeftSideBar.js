import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LeftSideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-between'>
      <Card>
        <div className='d-grid gap-2'>
          <LinkContainer to='/user'>
            <Button variant='outline-dark'>
              <i className='bi bi-house'></i> Home
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/explore'>
            <Button variant='outline-dark'>
              <i className='bi bi-rocket-takeoff'></i> Explore
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/bookmark'>
            <Button variant='outline-dark'>
              <i className='bi bi-bookmark-heart'></i> Bookmark
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/profile'>
            <Button variant='outline-dark'>
              <i className='bi bi-person'></i> Profile
            </Button>
          </LinkContainer>
          <LinkContainer to='/user/profile'>
            <Button variant='outline-dark'>
              <i className='bi bi-plus-square'></i> Create New Post
            </Button>
          </LinkContainer>
        </div>
      </Card>
    </div>
  );
};
export default LeftSideBar;
