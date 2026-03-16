import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <FloatingActions />
      <Footer />
    </Router>
  );
}

export default App;
