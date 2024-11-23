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
      {/* Apply h-screen to the main wrapper */}
      <div className="w-[1200px] max-w-full m-auto h-screen p-5 flex flex-col">
        <Header />
        {/* Routes are wrapped in a container with full height */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/:slug' element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
