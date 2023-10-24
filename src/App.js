import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Products from './Products.jsx';
function App() {
  return (
   <>
    <div className='container'>
        <Navbar />
        <Products/>
        <Footer />
    </div>
   </>
  );
}

export default App;
