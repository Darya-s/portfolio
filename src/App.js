import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Skills from './Skills';
import Certificates from './Certificates';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className='relative'>
      <HashRouter>
        <Navigation />
        <Header />
        <Routes>
          <Route path='/portfolio' element={<Home />} index />
          <Route path='certificates' element={<Certificates />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
