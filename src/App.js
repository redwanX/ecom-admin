import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin';

function App() {
  return (
    <div className='bg-accent'>
    <Routes>
       <Route path='/admin' element ={<Admin></Admin>} >
       </Route>
    </Routes>
    </div>
  );
}

export default App;
