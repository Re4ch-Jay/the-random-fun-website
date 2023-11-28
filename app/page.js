"use client"

import { useState } from 'react';
import { funWebsites } from '@/data/website';
import Link from 'next/link';

export default function Home() {
  // State to store the current random website
  const [randomWebsite, setRandomWebsite] = useState(getRandomWebsite());

  const currentYear = new Date().getFullYear();
  // Function to get a random website
  function getRandomWebsite() {
    return funWebsites[Math.floor(Math.random() * funWebsites.length)];
  }

  // Event handler for the "Please" button click
  function handleClick() {
    // Generate a new random website
    const newRandomWebsite = getRandomWebsite();
    // Update the state with the new random website
    setRandomWebsite(newRandomWebsite);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white max-w-md text-center uppercase">
          Take me to a Random <span className="text-pink-600">Fun</span> Website
        </h1>
        <Link
          href={randomWebsite}
          onClick={handleClick}
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white text-3xl md:text-5xl text-center font-bold py-2 px-4 rounded-md uppercase mt-4"
        >
          Please
        </Link>
      </div>

      <footer className="mt-8 text-white text-center">
        <p>&copy; 2023 - {currentYear} Random The Fun Website</p>
        <p>Made with ❤️ by <Link href="https://phatpanhareach.vercel.app/" target='_blank' className='hover:underline'>Panhareach Phat</Link></p>
      </footer>
    </div>
  );
}
