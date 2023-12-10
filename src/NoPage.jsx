const NoPage = () => {
  return (
    <div id='Contact' className='w-full rounded-lg shadow-md '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4'>404</h2>
        </div>
      </div>

      <div className=' grid justify-center gap-10 mx-auto py-28 text-main font-bold'>
        <h2 className='font-bold text-2xl'>No page found</h2>
      </div>
    </div>
  );
};

export default NoPage;
