import mock from './assets/images/mockProject.png';
import mock2 from './assets/images/mockProject2.png';
import mock3 from './assets/images/mockProject3.png';
import { Link } from 'react-router-dom';
import RedirectButton from './RedirectButton';

const Projects = () => {
  return (
    <div className='w-full rounded-lg shadow-md '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4'>My projects</h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center'>
        <div className=' grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 justify-around px-8 py-28'>
          <div className='justify-center items-center text-center m-auto grid gap-8 w-[75%] py-2 border-y-2 sm:border-0'>
            <div className='grid gap-4'>
              <h2 className='font-bold uppercase text-xl'> Meal sharing</h2>
              <p className='text-sm'>
                Created a full stack and mobile-friendly app, using React.js,
                Node.js and Express .js. Database in PostgreSQL. The service to
                allow user to book a seat for a meal sharing event.
              </p>
            </div>
            <img
              alt='project1'
              src={mock}
              className='rounded-2xl w-64 sm:w-96 transition-transform transform hover:scale-125 hover:z-10 mx-auto '
            />
            <div className='flex justify-center gap-4'>
              <RedirectButton
                link='https://meal-sharing-4lln.onrender.com'
                btnText='Demo'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />

              <RedirectButton
                link='https://github.com/Darya-s/meal-sharing-app'
                btnText='Source'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />
            </div>
          </div>

          <div className='justify-center items-center text-center m-auto grid gap-8 w-[75%] py-2 border-y-2 sm:border-0'>
            <div className='grid gap-4'>
              <h2 className='font-bold uppercase text-xl'>
                Project management
              </h2>
              <p className='text-sm '>
                Created a full stack and mobile-friendly app, using TypeScript,
                React.js, Node.js and Express .js. Database in PostgreSQL. The
                service allows users to manage projects and tasks on platform.
              </p>
            </div>
            <img
              alt='project2'
              src={mock2}
              className='rounded-2xl w-64 sm:w-96 transition-transform transform hover:scale-125 hover:z-10 mx-auto '
            />
            <div className='flex justify-center gap-4'>
              <RedirectButton
                link='https://lothbrok-webservice.onrender.com'
                btnText='Demo'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />

              <RedirectButton
                link='https://github.com/HackYourFuture-CPH/class-25-lothbrok'
                btnText='Source'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />
            </div>
          </div>

          <div className='justify-center items-center text-center m-auto grid gap-8 w-[75%] py-2 border-y-2 sm:border-0'>
            <div className='grid gap-4'>
              <h2 className='font-bold uppercase text-xl'>Weather app</h2>

              <p className='text-sm'>
                Created a clean, and mobile-friendly web app, using plain JS,
                Webpack, and Babel. Implemented fetching of Open-weather api,
                and geolocation data.
              </p>
            </div>
            <img
              alt='project3'
              src={mock3}
              className='rounded-2xl w-64 sm:w-96 transition-transform transform hover:scale-125 hover:z-10 mx-auto '
            />
            <div className='flex justify-center gap-4'>
              <RedirectButton
                link='https://darya-s.github.io/current-weather-app'
                btnText='Demo'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />

              <RedirectButton
                link='https://github.com/Darya-s/current-weather-app'
                btnText='Source'
                btnClass='w-1/3 bg-text text-main p-2 rounded-lg hover:text-third hover:bg-hover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
