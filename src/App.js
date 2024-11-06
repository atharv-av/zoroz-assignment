import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import FooterComponet from './components/FooterComponet';

function App() {
  return (

    <div>
      <div>
        <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </div>
      <div>
        <FooterComponet/>
      </div>
      
    </div>
  );
}

export default App;
