const Contact = () => {
  return (
    <div className='absolute top-[92%] left-0 w-full h-24 bg-blue-500 rounded-lg shadow-md z-10'>
      <div className='  grid text-text justify-center items-center mx-auto '>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-8'>Contact me</h2>
        </div>
      </div>

      <div className='bg-text shadow-top-right text-main flex justify-center items-center -mt-1'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 mx-6'>
          <p>linkedin</p>
          <p>email</p>
          <p>phone</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
