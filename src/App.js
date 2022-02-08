import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Imagedetail from './component/Imagedetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/about" element={ <About />} />
        <Route path="/image/:assetAddress/:id" element={<Imagedetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
