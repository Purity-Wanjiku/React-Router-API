import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import ProductsList from './ProductsList';
import AddProduct from './AddProduct';
import Productsdetails from './ProductsDetails';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
   
<Navbar/>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='login' element = {<Login/>} />
          <Route path='Products' element={<ProductsList />} />
          <Route path='View More' element={<Productsdetails />} /> 
          <Route exact path='/addproduct/' element={<AddProduct />} />
          
          <Route path = '/products/:productId' element = {<Productsdetails/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
