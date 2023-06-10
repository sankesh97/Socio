import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
