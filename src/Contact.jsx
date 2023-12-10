import linkedin from './assets/images/linkedin.png';
import email from './assets/images/gmail-logo.png';
import viber from './assets/images/viber.png';
const Home = () => {
  return (
    <div id='Contact' className='w-full rounded-lg shadow-md '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4'>Contact me</h2>
        </div>
      </div>

      <div className=' grid justify-center gap-10 mx-auto py-28 text-main font-bold'>
        <div className='flex gap-2 '>
          <a
            href='https://www.linkedin.com/in/daryast/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              alt='
          linkedin'
              src={linkedin}
              className='w-20 h-20 
            '
            />
          </a>

          <p className='m-auto'>linkedin.com/in/daryast</p>
        </div>
        <div className='flex gap-2'>
          <a href='mailto:darya.stepanova95@gmail.com'>
            <img
              alt='
          email'
              src={email}
              className='w-20 h-20 
            '
            />
          </a>

          <p className='m-auto'>darya.stepanova95@gmail.com</p>
        </div>
        <div className='flex gap-2'>
          <a href='tel:+4581219989'>
            <img
              alt='
          phone'
              src={viber}
              className='w-20 h-20 
            '
            />
          </a>
          <p className='m-auto'>+4581219989</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
