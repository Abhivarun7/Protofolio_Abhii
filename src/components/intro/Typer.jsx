import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/constant'
import '../intro/typer.css';

const TypingAnimation = () => {
  const lines = [
    personalInfo.greeting,
    1000,
    personalInfo.intro,
    1000,
    personalInfo.description,
    1000,
    personalInfo.message,
    1000,
    personalInfo.contact,
    1000,
  ];

  return (
    <div>
      <h1 className='lines'>
        <TypeAnimation
          sequence={lines}
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default TypingAnimation;
