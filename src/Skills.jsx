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
    <div id='Skills' className='w-full rounded-lg shadow-md '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4'>My Skills</h2>
        </div>
      </div>
      <div className=' bg-text justify-center items-center'>
        <div className='flex shadow-top-right justify-center items-center py-28'>
          <div className='grid grid-cols-3 gap-6  mx-2 justify-center items-center text-main sm:gap-10'>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32 ' alt='vscode' src={vscode} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Visual Code
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='github' src={github} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Github
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='docker' src={docker} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Docker
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='figma' src={figma} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Figma
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='react' src={react} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                React.js
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='node' src={node} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Node.js
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='typescript' src={typescript} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Type Script
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='javascript' src={js} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Java Script
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='html' src={html} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                HTML
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='css' src={css} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                CSS
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='mui' src={mui} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Material UI
              </h3>
            </div>
            <div className='grid grid-cols-2'>
              <img className='w-12 sm:w-32' alt='tailwind' src={tailwind} />
              <h3 className='justify-center items-center m-auto font-bold text-sm sm:text-2xl'>
                Tailwind CSS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
