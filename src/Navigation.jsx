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
        <nav className='sm:mx-auto text-text fixed top-0 left-0 right-0 z-10 shadow-md justify-left items-left sm:text-center '>
          <ul className='pl-2 sm:h-12 sm:flex sm:justify-center sm:items-center gap-6 text-2xl bg-main'>
            <li>
              <Link
                to='/portfolio'
                className={`transition-transform transform hover:text-fourth ${
                  selectedComponent === 'Home'
                    ? ' bg-text text-main pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                    : ''
                }`}
                onClick={() => handleLinkClick('Home')}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/certificates'
                className={`transition-transform transform hover:text-fourth ${
                  selectedComponent === 'Certificates'
                    ? ' bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                    : ''
                }`}
                onClick={() => handleLinkClick('Certificates')}>
                Certificates
              </Link>
            </li>
            <li>
              <Link
                to='/skills'
                className={`transition-transform transform hover:text-fourth ${
                  selectedComponent === 'Skills'
                    ? ' bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
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
                    ? ' bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
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
