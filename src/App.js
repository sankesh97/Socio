import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
