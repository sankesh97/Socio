import { useContext, useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { loggedInUser, token } = useContext(AuthContext);
  const { createNewPost } = useContext(PostsContext);
  const [postContent, setPostContent] = useState();

  return (
    <>
      {loggedInUser && (
        <Card style={{ width: '100%' }}>
          <Card.Header className='d-flex justify-content-between'>
            <img
              className='rounded-circle img-fluid'
              src={loggedInUser.Avatar}
              alt={loggedInUser.username}
              width='36px'
            />
            <Button
              className='btn-teal'
              onClick={() => {
                createNewPost(token, { content: postContent });
              }}
            >
              Post
            </Button>
          </Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId='floatingTextarea2'
              label='Write something interesting...'
            >
              <Form.Control
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                as='textarea'
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default CreatePost;
