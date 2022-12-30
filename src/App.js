import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Customer from './Pages/Customer/Customer';

function App() {
  return (
    <div className='bg-accent'>
    <Routes>
       <Route path='/admin' element ={<Admin></Admin>} >
       <Route index element={<Dashboard></Dashboard>}></Route>
       <Route path='customer' element={<Customer></Customer>}></Route>
         
       </Route>
    </Routes>
    </div>
  );
}

export default App;
