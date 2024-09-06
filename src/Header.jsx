import profile from './assets/images/profile.jpg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1Ki7VEc4ECWPXtKIR6v-dAeHvnWT-gCub/view?usp=sharing',
      '_blank'
    );
  };

  const openLinkButton = () => {
    window.open('https://github.com/Darya-s', '_blank');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='h-screen sm:h-[50vh] bg-gradient-to-r from-main via-secondary to-third flex flex-col sm:flex-row justify-evenly items-center text-center mt-6'>
      <div
        className={`text-text pt-20 w-full sm:w-[50%] sm:text-left transition-transform ease-in-out duration-1000 transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className='flex flex-col sm:flex-row gap-5 items-center'>
          <button
            className='w-1/3 bg-black text-text p-2 rounded-lg hover:text-fourth hover:bg-opacity-60'
            onClick={handleDownload}>
            Download CV
          </button>
          <button
            onClick={openLinkButton}
            className='w-1/3 bg-black text-text p-2 rounded-lg hover:text-fourth hover:bg-opacity-60'>
            Github
          </button>
        </div>

        <div className='mt-6'>
          <h1 className='font-bold text-base sm:text-4xl mt-2'>
            Hi, I am Darya
          </h1>
          <p className='text-lg sm:text-xl mt-2 px-2 sm:px-0'>
            I am an ambitious junior full-stack developer with expertise in
            React, Node.js, and TypeScript. Actively seeking an internship or a
            position to further enhance my skills and make a meaningful
            contribution to a dynamic team.
          </p>
        </div>
      </div>

      <img
        className={`rounded-full w-[20%] transition-transform ease-in-out duration-1000 transform ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        src={profile}
        alt='Profile'
      />
    </div>
  );
};

export default Header;
