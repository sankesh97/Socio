import { useContext } from 'react';
import { AuthContext } from '../../context/AppContext';

const Home = () => {
  const { logoutHandler } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          logoutHandler();
        }}
      >
        Logout
      </button>
    </>
  );
};
export default Home;
