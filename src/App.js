//import logo from './logo.svg';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import { Routing } from './Routing';
import { Home } from './folder/Home';
import { Index } from './folder/Index';
import { RegForm } from './folder/RegForm';
import { Empview } from './folder/EmpView';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
  <div className='app'>
     <ToastContainer></ToastContainer>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Index/>}></Route>
      <Route path='/Register' element={<RegForm/>}></Route>
      <Route path='/empview' element={<Empview/>}></Route>

     </Routes>

     </BrowserRouter>
   
    

     </div>


  
  );
}

export default App;
