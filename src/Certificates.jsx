import hyf from './assets/images/HYFcertificate.png';
import ui from './assets/images/UIcertificate.jpg';
import ux from './assets/images/UXcertificate.jpg';
import FullSizeImage from './FullSizeImage';

const Certificates = () => {
  return (
    <div
      id='certificates'
      className='w-full rounded-lg shadow-md bg-gradient-to-r from-main via-secondary to-third '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4 py-2'>
            My certificates
          </h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center max-h-fit -mt-1'>
        <div className=' grid justify-items-center gap-10 mx-auto py-44'>
          <FullSizeImage imageUrl={hyf} className='w-[80%] ' />
          <FullSizeImage imageUrl={ux} className='w-[80%] ' />
          <FullSizeImage imageUrl={ui} className='w-[80%] ' />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
