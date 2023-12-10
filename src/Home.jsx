import hyf from './assets/images/HYFcertificate.png';
import ui from './assets/images/UIcertificate.jpg';
import ux from './assets/images/UXcertificate.jpg';
const Home = () => {
  return (
    <div id='Home' className='w-full rounded-lg shadow-md '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4'>My certificates</h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center max-h-fit'>
        <div className=' grid justify-items-center gap-10 mx-auto py-28'>
          <img alt='project1' src={hyf} className='rounded-2xl w-[80%]' />
          <img alt='project2' src={ux} className='rounded-2xl w-[80%] ' />
          <img alt='project3' src={ui} className='rounded-2xl w-[80%]' />
        </div>
      </div>
    </div>
  );
};

export default Home;
