import mock from './assets/images/mockProject.png';
import mock2 from './assets/images/mockProject2.png';
import mock3 from './assets/images/mockProject3.png';

const Projects = () => {
  return (
    <>
      <div className='grid text-text justify-center items-center mx-auto pt-10 '>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-8 pb-2.5 '>
            My projects
          </h2>
        </div>
      </div>

      <div className='bg-text shadow-top-right text-main flex justify-center items-center -mt-1'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 mx-6'>
          <img
            alt='project1'
            src={mock}
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
          <img
            alt='project2'
            src={mock2}
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
          <img
            alt='project3'
            src={mock3}
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
