import mock from './assets/images/mockProject.png';
import mock2 from './assets/images/mockProject2.png';
import mock3 from './assets/images/mockProject3.png';
import RedirectButton from './RedirectButton';
import FullSizeImage from './FullSizeImage';

const Projects = () => {
  return (
    <div
      id='Home'
      className='w-full rounded-lg shadow-md bg-gradient-to-r from-main via-secondary to-third '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4 py-2'>Projects</h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center -mt-1'>
        <div className='flex flex-col gap-8  sm:gap-20 justify-around px-8 py-44'>
          <div className='grid grid-cols 1 sm:grid-cols-2 justify-around items-center  text-center sm:text-left m-auto grid gap-16 w-[100%] sm:w-[75%] h-[100%] border-transparent hover:border-2 hover:border-main rounded-md p-4  transition duration-300 ease-in-out'>
            <div>
              <h2 className='font-bold uppercase text-xl'> Meal sharing</h2>
              <p>
                Created a full stack and mobile-friendly app, using React.js,
                Node.js and Express .js. Database in PostgreSQL. The service to
                allow user to book a seat for a meal sharing event.
              </p>
            </div>
            <div>
              <FullSizeImage
                imageUrl={mock}
                className='rounded-2xl w-64 sm:w-96  mx-auto '
              />

              <div className='flex justify-center gap-4 mt-4'>
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
          </div>

          <div className='grid grid-cols 1 sm:grid-cols-2 justify-between items-center text-center sm:text-left m-auto grid gap-8 w-[100%] sm:w-[75%] h-[100%] border-transparent hover:border-2 hover:border-main rounded-md p-4  transition duration-300 ease-in-out'>
            <div>
              {' '}
              <h2 className='font-bold uppercase text-xl'>
                Project management
              </h2>
              <p>
                Created a full stack and mobile-friendly app, using TypeScript,
                React, Node and Express, Firebase and database in PostgreSQL.
                The service allows users to manage projects and tasks on
                platform. Worked in team of 4 people. I had the opportunity to
                lead the team throughout this project that was developed
                following Agile Scrum principles.
              </p>
            </div>
            <div>
              <FullSizeImage
                imageUrl={mock2}
                className='rounded-2xl w-64 sm:w-96  mx-auto '
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
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center text-center sm:text-left m-auto grid gap-8 w-[100%] sm:w-[75%] h-[100%] border-transparent hover:border-2 hover:border-main rounded-md p-4  transition duration-300 ease-in-out'>
            <div>
              <h2 className='font-bold uppercase text-xl'>Weather app</h2>
              <p>
                Created a clean, and mobile-friendly web app, using plain JS,
                Webpack, and Babel. Implemented fetching of Open-weather api,
                and geolocation data.
              </p>
            </div>
            <div>
              <FullSizeImage
                imageUrl={mock3}
                className='rounded-2xl w-64 sm:w-96  mx-auto '
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
    </div>
  );
};

export default Projects;
