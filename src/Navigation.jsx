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
    <nav className='mx-auto text-text  sticky top-0 left-0 right-0 z-10 bg-white shadow-md justify-left items-left sm:text-center'>
      <ul className=' sm:flex sm:justify-center sm:items-center gap-6 text-2xl bg-gradient-to-r from-main via-secondary to-third'>
        <li>
          <Link
            to='/#home'
            onClick={(e) => scrollToSection('home', e)}
            className={
              ` transition-transform transform hover:text-fourth  ${
                location?.hash === '#home'
                  ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
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
              location?.hash === '#projects'
                ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
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
              location?.hash === '#skills'
                ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                : ''
            }`}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='/#contact'
            onClick={(e) => scrollToSection('contact', e)}
            className={`  transition-transform transform  hover:text-fourth ${
              location?.hash === '#contact'
                ? ' bg-text px-4 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
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
