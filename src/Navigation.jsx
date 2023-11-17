// Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='mx-auto text-center text-text '>
      <ul className=' sm:flex justify-center items-center gap-6 text-2xl'>
        <li>
          <Link
            to='/'
            onClick={(e) => scrollToSection('home', e)}
            className={
              ` transition-transform transform hover:text-fourth  ${
                location?.pathname === '/'
                  ? 'bg-text px-4 rounded-b-lg text-main'
                  : ''
              } ` /*xs:rounded-r-lg flex w-3/6*/
            }>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/#projects'
            onClick={(e) => scrollToSection('projects', e)}
            className={`  transition-transform transform  hover:text-fourth ${
              location?.pathname === '/projects'
                ? 'bg-text px-4 rounded-b-lg shadow-md text-main'
                : ''
            }`}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='/#skills'
            onClick={(e) => scrollToSection('skills', e)}
            className={`  transition-transform transform hover:text-fourth ${
              location?.pathname === '/skills'
                ? 'bg-text px-4 rounded-b-lg  text-main'
                : ''
            }`}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            onClick={(e) => scrollToSection('contact', e)}
            className={`  transition-transform transform  hover:text-fourth ${
              location?.pathname === '/contact'
                ? 'bg-text px-4 rounded-b-lg shadow-md text-main'
                : ''
            }`}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
