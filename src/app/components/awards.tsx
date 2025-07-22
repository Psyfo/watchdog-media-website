"use client";
import React from "react";
import TextBlock from "@/components/text-block";

const Awards: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-6 py-16 text-center bg-white md:py-24'>
      <TextBlock
        heading='Awards'
        text='Watchdog Media has been recognized for its excellence in film production, receiving numerous awards and accolades.'
      />
    </section>
  );
};

export default Awards;
