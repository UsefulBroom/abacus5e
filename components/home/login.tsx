import { FC } from 'react';
import Image from 'next/image';
import LogoHero from '@app/public/images/abacus-sm.png';

export const Login: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-3 font-serif">
      <div className="">
        <div className="">
          <h3 className="pl-2 text-xl font-light">Have you been here before?</h3>
        </div>
        <div className="flex justify-evenly">
          {/* Get Started | Jump to login */}
          {/* <button className="px-1 mt-3 border-2 border-solid text-sky-600 border-sky-600 rounded-xl hover:shadow-sm hover:shadow-cyan-700 hover:inset-3 hover:text-cyan-400 hover:bg-sky-800 hover:border-cyan-400">
            Login
          </button>
          <button className="px-1 mt-3 border-2 border-solid text-emerald-600 border-emerald-600 rounded-xl hover:shadow-sm hover:shadow-emerald-700 hover:inset-3 hover:text-emerald-400 hover:bg-teal-800 hover:border-emerald-400">
            Create New
          </button> */}
        </div>
      </div>
    </div>
  );
};
