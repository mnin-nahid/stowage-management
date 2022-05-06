import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Banner from './Pages/Home/Banner/Banner';
import Products from './Pages/Home/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <h3 className='text-primary'>Hello Firebase!!</h3>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
