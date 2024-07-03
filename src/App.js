import Navbar from './component/Navbar';
import './App.css';
import Header from './component/Header';
import Products from './component/Products';
import BestProducts from './component/BestProducts';
import Winter from './component/Winter';
import Email from './component/Email';
import Cus from './component/Cus';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      
      <div>
      <Navbar/>
      </div>

      <div>
      <Header/>
      </div>

      <div>
      <Products/>
      </div>


      <div>
      <BestProducts/>
      </div>

      <div>
      <Winter/>
      </div>

      <div>
      <Email/>
      </div>

      <div>
      <Cus/>
      </div>

      <div>
      <Footer/>
      </div>

    </div>
  );
}

export default App;
