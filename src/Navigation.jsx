// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Contact from './Contact';
import NoPage from './NoPage';

const Navigation = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentRender = (componentName) => {
    switch (componentName) {
      case 'Home':
        return;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <NoPage />;
    }
  };

  return (
    <div>
      <nav className='mx-auto text-text sticky top-0 left-0 right-0 z-10 shadow-md justify-left items-left sm:text-center'>
        <ul className='sm:flex sm:justify-center sm:items-center gap-6 text-2xl bg-main'>
          <li>
            <Link
              to='/'
              className={`transition-transform transform hover:text-fourth ${
                selectedComponent === 'Home'
                  ? ' bg-text text-main px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                  : ''
              }`}
              onClick={() => setSelectedComponent('Home')}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              className={`transition-transform transform hover:text-fourth ${
                selectedComponent === 'Projects'
                  ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                  : ''
              }`}
              onClick={() => setSelectedComponent('Projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='/skills'
              className={`transition-transform transform hover:text-fourth ${
                selectedComponent === 'Skills'
                  ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                  : ''
              }`}
              onClick={() => setSelectedComponent('Skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={`transition-transform transform hover:text-fourth ${
                selectedComponent === 'Contact'
                  ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                  : ''
              }`}
              onClick={() => setSelectedComponent('Contact')}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <div className=''>
        <Header />
        {selectedComponent && handleComponentRender(selectedComponent)}
      </div>
    </div>
  );
};

export default Navigation;
