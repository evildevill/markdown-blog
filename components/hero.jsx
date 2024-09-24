import Image from 'next/image';
import React from 'react';

export function Hero() {
  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A personal blog offering <span className="font-semibold">free resources, insights,</span> and tools on <br className="hidden lg:block" />
          <span className="font-semibold font-mono underline decoration-purple-600">cybersecurity and programming,</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          designed to help others enhance their skills <br className="hidden lg:block" />
          and stay updated with the latest industry trends.
        </p>

      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
          src="/website-designer-bro-purple.svg"
          alt="tailwind css components"
          width={500}
          height={500}
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
