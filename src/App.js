import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ManageInventories from './Pages/Inventories/ManageInventories/ManageInventories';
import Signin from './Pages/Login/Login/Signin';
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
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
