import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import NoPage from './NoPage';
import Skills from './Skills';

function App() {
  return (
    <div className='bg-gradient-to-r from-main via-secondary to-third'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
