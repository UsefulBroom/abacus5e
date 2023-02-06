import { FC } from 'react';
import Image from 'next/image';
import LogoHero from '@app/public/images/abacus-sm.png';

export const Login: FC = () => {
  return (
    <div className="flex flex-col pt-3 justify-center items-center font-serif">
      <div className="">
        <div className="">
          <h2 className="pl-2 font-light text-2xl">You look familiar friend</h2>
          <h3 className="pl-2 font-light text-xl">Have you been here before?</h3>
        </div>
        <div className="flex justify-evenly">
          {/* Get Started | Jump to login */}
          <button className="mt-3 px-1 text-sky-600 border-2 border-solid border-sky-600 rounded-xl hover:shadow-sm hover:shadow-cyan-700 hover:inset-3 hover:text-cyan-400 hover:bg-sky-800 hover:border-cyan-400">
            Login
          </button>
          <button className="mt-3 px-1 text-emerald-600 border-2 border-solid border-emerald-600 rounded-xl hover:shadow-sm hover:shadow-emerald-700 hover:inset-3 hover:text-emerald-400 hover:bg-teal-800 hover:border-emerald-400">
            Create New
          </button>
        </div>
      </div>
    </div>
  );
};
