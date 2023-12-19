import vscode from './assets/icons/visual-studio.png';
import github from './assets/icons/github.png';
import docker from './assets/icons/docker.png';
import figma from './assets/icons/figma.png';
import html from './assets/icons/html-5.png';
import css from './assets/icons/css.png';
import js from './assets/icons/javascript.png';
import node from './assets/icons/nodejs.png';
import react from './assets/icons/react.png';
import typescript from './assets/icons/typescript.png';
import mui from './assets/icons/mui.png';
import tailwind from './assets/icons/tailwind.png';

const SkillItem = ({ alt, src, text }) => {
  return (
    <div className='flex'>
      <img className='w-10 sm:w-16' alt={alt} src={src} />
      <h3 className='my-auto ml-3'>{text}</h3>
    </div>
  );
};

const SkillsGrid = () => {
  const skillsData = [
    { alt: 'vscode', src: vscode, text: 'Visual' },
    { alt: 'github', src: github, text: 'Github' },
    { alt: 'html', src: html, text: 'Docker' },
    { alt: 'react', src: react, text: 'React' },
    { alt: 'node', src: node, text: 'Node' },
    { alt: 'typescript', src: typescript, text: 'TypeScript' },
    { alt: 'js', src: js, text: 'JavaScript' },
    { alt: 'figma', src: figma, text: 'Figma' },
    { alt: 'css', src: css, text: 'CSS' },
    { alt: 'mui', src: mui, text: 'MUI' },
    { alt: 'tailwind', src: tailwind, text: 'Tailwind' },
    { alt: 'docker', src: docker, text: 'Docker' },
  ];

  return (
    <div className='grid grid-cols-3 gap-6 mx-4 justify-center items-center font-bold text-main text-xs sm:gap-10 sm:text-2xl'>
      {skillsData.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  );
};
export default SkillsGrid;
