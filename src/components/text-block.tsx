import React from 'react';

interface TextBlockProps {
  heading?: string;
  text?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, text }) => (
  <div>
    {heading && (
      <h1 className='mb-6 text-[18px] font-bold text-watchdog-dark font-noteworthy md:text-[30px] uppercase'>
        {heading}
      </h1>
    )}
    <p className='md:max-w-[50vw] text-base leading-relaxed text-watchdog-dark font-myriad md:text-[30px] text-justify'>
      {text}
    </p>
  </div>
);

export default TextBlock;
