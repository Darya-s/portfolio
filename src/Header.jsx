import profile from './assets/images/profile.png';
import profile1 from './assets/images/profile1.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1QVPtr3E3ymFy4d3ZUvKCpdgCi2ErN1hI/view?usp=sharing',
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
    <>
      <div className=' h-screen max-h-[50vh] sm: h-screen max-h-[70vh] bg-gradient-to-r from-main via-secondary to-third sm:flex justify-evenly  xs:grid justify-center items-center text-center '>
        <div
          className={`text-text mx-auto w-[50%] sm:text-left transition-transform ease-in-out duration-1000 transform ${
            isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className='flex gap-5'>
            <button
              className='bg-black text-text p-2 rounded-lg hover:text-fourth hover:bg-opacity-60'
              onClick={handleDownload}>
              Download CV
            </button>
            <button
              onClick={openLinkButton}
              className='bg-black text-text p-2 rounded-lg hover:text-fourth hover:bg-opacity-60'>
              Github
            </button>
          </div>

          <h1 className='font-bold text-base sm:text-6xl mt-2'>
            Hi, I am Darya
          </h1>
          <p className='text-base py-3 sm:text-xl'>
            I am ambitious junior full-stack developer with expertise in React,
            Node JS and TypeScript. I am actively seeking an internship or a
            position to further enhance my skills and make a meaningful
            contribution to a dynamic team.
          </p>
        </div>

        <img
          className={`mb-8 rounded-full max-w-[20%] mx-auto transition-transform ease-in-out duration-1000 transform ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
          src={profile}
          alt='Profile'
        />
      </div>
    </>
  );
};

export default Header;
