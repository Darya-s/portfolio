// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleLinkClick = (componentName) => {
    setSelectedComponent(componentName);

    const element = document.getElementById(componentName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='flex'>
        <nav className='mx-auto text-text fixed top-0 left-0 right-0 z-10 shadow-md justify-left items-left sm:text-center '>
          <ul className='sm:flex sm:justify-center sm:items-center gap-6 text-2xl bg-main'>
            <li>
              <Link
                to='/home'
                className={`transition-transform transform hover:text-fourth ${
                  selectedComponent === 'Home'
                    ? ' bg-text text-main px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                    : ''
                }`}
                onClick={() => handleLinkClick('Home')}>
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
                onClick={() => handleLinkClick('Projects')}>
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
                onClick={() => handleLinkClick('Skills')}>
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
                onClick={() => handleLinkClick('Contact')}>
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
