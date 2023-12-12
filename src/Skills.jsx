import vscode from './assets/icons/visual-studio.png';
import github from './assets/icons/github.png';
import docker from './assets/icons/docker.png';
import figma from './assets/icons/figma.png';
import html from './assets/icons/html-5.png';
import css from './assets/icons/css.png';
import js from './assets/icons/javascript.png';
import node from './assets/icons/nodejs.png';
import react from './assets/icons/react.png';
import typescript from './assets/icons/typescript.png';
import mui from './assets/icons/mui.png';
import tailwind from './assets/icons/tailwind.png';

const Skills = () => {
  return (
    <div
      id='Skills'
      className='w-full rounded-lg shadow-md bg-gradient-to-r from-main via-secondary to-third '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4 py-2'>My skills</h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center max-h-fit -mt-1'>
        <div className=' grid justify-items-center gap-10 mx-auto py-44'>
          <div
            className='grid grid-cols-3 gap-6  mx-4 justify-center items-center font-bold text-main text-xs sm:gap-10 sm:text-2xl
          '>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='vscode' src={vscode} />
              <h3 className=' my-auto ml-3  '>Visual</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='github' src={github} />
              <h3 className=' my-auto ml-3'>Github</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='docker' src={docker} />
              <h3 className=' my-auto ml-3 '>Docker</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='html' src={html} />
              <h3 className='my-auto ml-3 '>HTML</h3>
            </div>

            <div className='flex'>
              <img className='w-10 sm:w-28' alt='react' src={react} />
              <h3 className=' my-auto ml-3 '>React</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='node' src={node} />
              <h3 className=' my-auto ml-3 '>Node</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='typescript' src={typescript} />
              <h3 className=' my-auto ml-3 '>Type Script</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='javascript' src={js} />
              <h3 className=' my-auto ml-3 '>Java Script</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='figma' src={figma} />
              <h3 className=' my-auto ml-3 '>Figma</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='css' src={css} />
              <h3 className=' my-auto ml-3'>CSS</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='mui' src={mui} />
              <h3 className=' my-auto ml-3 '>Material UI</h3>
            </div>
            <div className='flex'>
              <img className='w-10 sm:w-28' alt='tailwind' src={tailwind} />
              <h3 className=' my-auto ml-3 '>Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
