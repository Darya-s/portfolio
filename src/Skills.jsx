import SkillsGrid from './SkillsGrid';
const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full rounded-lg shadow-md bg-gradient-to-r from-main via-secondary to-third '>
      <div className='grid text-text justify-center items-center  bg-gradient-to-r from-main via-secondary to-third'>
        <div className='bg-text rounded-tl-lg rounded-tr-lg shadow-top-right'>
          <h2 className='text-4xl font-bold text-main px-4 py-2'>My skills</h2>
        </div>
      </div>

      <div className='  bg-text shadow-top-right text-main flex justify-center items-center max-h-fit -mt-1'>
        <div className='mb-2 grid justify-items-center gap-10 mx-auto py-44'>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
};

export default Skills;
