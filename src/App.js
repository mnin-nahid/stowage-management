import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import AddProduct from './Pages/Inventories/AddProduct/AddProduct';
import AllProduct from './Pages/Inventories/AllProduct/AllProduct';
import ManageInventories from './Pages/Inventories/ManageInventories/ManageInventories';
import ProductDetails from './Pages/Inventories/ProductDetails/ProductDetails';
import Signin from './Pages/Login/Login/Signin';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/allproducts' element={<AllProduct></AllProduct>}></Route>
        <Route path='/addnewitem' element={<AddProduct></AddProduct>}></Route>
        <Route path='/inventori/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
