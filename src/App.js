// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import NoPage from './NoPage';
import Skills from './Skills';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className='relative'>
      <Router>
        <Navigation />
        <Header />
        <Routes>
          <Route path='portfolio' element={<Home />} index />
          <Route path='home' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
