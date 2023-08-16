import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const RequiresAuth = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);
  return loggedInUser ? children : <Navigate to='/login' />;
};
