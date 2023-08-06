import { useContext } from 'react';
import { AuthContext } from '../../context/AppContext';
import CreatePost from '../../components/CreatePost';
import { Form } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <CreatePost />
      <hr />
      <div className='d-flex justify-content-between'>
        <h3>Latest Posts</h3>
        <div>
          <Form.Select aria-label='Sorting Dropdown'>
            <option>Sort By</option>
            <option value='Trending'>Trending</option>
            <option value='Date'>Date</option>
          </Form.Select>
        </div>
      </div>
    </>
  );
};
export default Home;
