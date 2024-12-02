import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Detail from './Detail';

function App() {
  return (
    <BrowserRouter>
      {/* Add min-h-screen to ensure full viewport height */}
      <div className="w-[1200px] max-w-full m-auto p-5 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/:slug' element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
