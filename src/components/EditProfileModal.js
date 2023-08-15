import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UsersContext } from '../context/UsersContext';
import { FloatingLabel, Form } from 'react-bootstrap';

const EditProfileModal = ({ userData }) => {
  const { editUser } = useContext(UsersContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    bio: userData.bio,
    Avatar: userData.Avatar,
    portfolioURL: userData.portfolioURL,
  });

  const profilePictures = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
  ];

  const formDataHandler = (event, picVal) => {
    console.log(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const AvatarHandler = (event, picVal) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: picVal,
    }));
  };

  const handleSubmit = () => {
    editUser({
      ...userData,
      bio: formData.bio,
      Avatar: formData.Avatar,
      portfolioURL: formData.portfolioURL,
    });
    handleClose();
  };

  return (
    <>
      <Button variant='outline-light' onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Avatar</h3>
            <div className='row'>
              {profilePictures.map((pic) => (
                <div
                  key={pic}
                  className={`col-3 d-flex flex-column justify-content-center align-items-center ${
                    pic === formData.Avatar
                      ? 'bg-light rounded text-dark'
                      : null
                  }`}
                >
                  <img
                    src={`/UserProfileImages/${pic}.jpeg`}
                    className='rounded-circle img-fluid m-3'
                    onClick={(event) => AvatarHandler(event, pic)}
                    value={pic}
                    name='Avatar'
                    width='30px'
                    alt={userData.name}
                  />
                  <span>{pic}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <FloatingLabel controlId='bio' label='Bio'>
            <Form.Control
              as='textarea'
              name='bio'
              onChange={formDataHandler}
              value={formData.bio}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <hr />
          <FloatingLabel
            controlId='floatingInput'
            label='Portfolio URL'
            className='mb-3'
          >
            <Form.Control
              type='text'
              name='portfolioURL'
              onChange={formDataHandler}
              value={formData.portfolioURL}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfileModal;
