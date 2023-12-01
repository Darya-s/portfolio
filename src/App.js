// App.js
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
    <div className='relative'>
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} index />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
