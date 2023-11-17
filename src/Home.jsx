import profile from './assets/images/profile.png';
import profile1 from './assets/images/profile1.png';
import Projects from './Projects';
import Skills from './Skills';

import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        id='home'
        className='h-screen max-h-[50vh] bg-gradient-to-r from-main via-secondary to-third sm:flex justify-evenly  xs:grid justify-center items-center text-center mt-4'>
        <div
          className={`text-text mx-auto w-[50%] py-4 sm:text-left transition-transform ease-in-out duration-1000 transform ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <h1 className='font-bold text-6xl'>Hi, I am Darya</h1>
          <p className='text-xl py-3'>
            I am ambitious junior full-stack developer with expertise in React,
            Node JS and TypeScript. I am actively seeking an internship or a
            position to further enhance my skills and make a meaningful
            contribution to a dynamic team.
          </p>
        </div>

        <img
          className={` rounded-full max-w-[20%] mx-auto transition-transform ease-in-out duration-1000 transform ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
          src={profile}
          alt='Profile'
        />
      </div>
      <div id='projects'>
        <Projects />
      </div>

      <div id='skills'>
        <Skills />
      </div>
    </>
  );
};

export default Home;
