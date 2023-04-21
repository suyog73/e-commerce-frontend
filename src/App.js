import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
 
function App() {
  return (

    <div className="App">
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout'/>
            <Route path='/profile' element={<Profile />} />

          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
