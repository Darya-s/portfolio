import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Skills from './Skills';
import Certificates from './Certificates';

export const router = (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='certificates' element={<Certificates />} />
    <Route path='skills' element={<Skills />} />
    <Route path='contact' element={<Contact />} />
    <Route path='*' element={<NoPage />} />
  </Routes>
);
