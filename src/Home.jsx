const Home = () => {
  return (
    <div className='absolute top-[92%] left-0 w-full h-24 bg-blue-500 rounded-lg shadow-md z-10'>
      <div className='  grid text-text justify-center items-center mx-auto '>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-8'>My certificates</h2>
        </div>
      </div>

      <div className='bg-text shadow-top-right text-main flex justify-center items-center -mt-1'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 mx-6'>
          <img
            alt='project1'
            src=''
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
          <img
            alt='project2'
            src=''
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
          <img
            alt='project3'
            src=''
            className='rounded-2xl w-96 h-52 transition-transform transform hover:scale-150 hover:z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
