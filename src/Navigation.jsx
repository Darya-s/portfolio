import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='flex'>
        <nav className='sm:mx-auto text-text fixed top-0 left-0 right-0 z-10 shadow-md justify-left items-left sm:text-center '>
          <ul className='pl-2 sm:h-12 sm:flex sm:justify-center sm:items-center gap-6 text-2xl bg-main'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `transition-transform transform hover:text-fourth ${
                    isActive
                      ? 'bg-text text-main pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                      : ''
                  }`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/certificates'
                className={({ isActive }) =>
                  `transition-transform transform hover:text-fourth ${
                    isActive
                      ? 'bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                      : ''
                  }`
                }>
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/skills'
                className={({ isActive }) =>
                  `transition-transform transform hover:text-fourth ${
                    isActive
                      ? 'bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                      : ''
                  }`
                }>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `transition-transform transform hover:text-fourth ${
                    isActive
                      ? 'bg-text pl-4 sm:p-2 rounded-r-lg flex w-3/6 text-main sm:rounded-b-lg sm:w-full'
                      : ''
                  }`
                }>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
