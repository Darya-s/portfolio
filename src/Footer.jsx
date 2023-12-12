import linkedin from './assets/icons/linkedin.png';
import email from './assets/icons/gmail-logo.png';
import viber from './assets/icons/viber.png';
const Footer = () => {
  return (
    <footer className=' text-sm sm:text-lg grid grid-cols-1 sm:grid-cols-2 justify-items-center bg-gradient-to-r from-main via-secondary to-third text-text text-center absolute bottom-0 w-full '>
      <div className='pt-2'>
        <div>
          <a
            className='flex gap-2 py-1'
            href='https://www.linkedin.com/in/daryast/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              alt='
          linkedin'
              src={linkedin}
              className='w-5 h-5
            '
            />

            <p>in/daryast/</p>
          </a>
        </div>
        <div>
          <a
            className='flex gap-2 py-1'
            href='mailto:darya.stepanova95@gmail.com'>
            <img
              alt='
          email'
              src={email}
              className='w-5 h-5
            '
            />
            <p>darya.stepanova95@gmail.com</p>
          </a>
        </div>
        <div>
          <a className='flex gap-2 py-1' href='tel:+4581219989'>
            <img
              alt='
          phone'
              src={viber}
              className='w-5 h-5
            '
            />
            <p>+4581219989</p>
          </a>
        </div>
      </div>
      <div className='m-auto font-bold py-2'>© Darya Stepanova 2023</div>
    </footer>
  );
};

export default Footer;
