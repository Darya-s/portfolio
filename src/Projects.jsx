import mock from './assets/images/mockProject.png';
import mock2 from './assets/images/mockProject2.png';
import mock3 from './assets/images/mockProject3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='absolute top-[92%] left-0 w-full h-24 bg-blue-500 rounded-lg shadow-md z-10'>
      <div className='  grid text-text justify-center items-center mx-auto '>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-8'>My projects</h2>
        </div>
      </div>

      <div className='bg-text shadow-top-right text-main flex justify-center items-center -mt-1 sm:h-screen sm:max-h-[50vh]'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-24 mt-20 '>
          <div className=' flex justify-center items-center transition-transform transform hover:scale-125 sm:hover:scale-150 hover:z-10 text-center mx-6'>
            <Link
              to='https://meal-sharing-4lln.onrender.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                alt='project1'
                src={mock}
                className='rounded-2xl w-64 sm:w-96 '
              />
              Meal sharing
            </Link>
          </div>
          <div className='transition-transform transform hover:scale-125 sm:hover:scale-150 hover:z-10 text-center mx-6'>
            <Link
              to='https://lothbrok-webservice.onrender.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                alt='project2'
                src={mock2}
                className='rounded-2xl w-64 sm:w-96'
              />
              Project management platform
            </Link>
          </div>
          <div className='transition-transform transform hover:scale-125 sm:hover:scale-150 hover:z-10 text-center mx-6 '>
            <Link
              to='https://darya-s.github.io/current-weather-app'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                alt='project3'
                src={mock3}
                className='rounded-2xl w-64 sm:w-96'
              />
              Weather app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
