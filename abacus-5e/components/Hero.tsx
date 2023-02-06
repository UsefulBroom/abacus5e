import { FC } from 'react';
import Image from 'next/image';
import LogoHero from '@app/public/images/abacus-sm.png';

export const Hero: FC = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="flex flex-col text-cyan-400 font-serif mt-5 col-start-2 col-end-3 justify-center items-center">
        <div className="flex flex-col items-center">
          <Image src={LogoHero} width={60} height={60} alt="Abacus 5e Logo" />
          <h2 className="pl-2 text-3xl">Abacus 5e</h2>
        </div>
        <div className="grid col-row-2 col-start-2">
          <button className="mt-3 px-1 text-sky-600 border-2 border-solid border-sky-600 rounded-xl hover:shadow-sm hover:shadow-cyan-700 hover:inset-3 hover:text-cyan-400 hover:bg-sky-800 hover:border-cyan-400">
            Get Started
          </button>
        </div>
      </div>
      <div className="grid col-start-4 col-end-6 ml-5 py-5">
        <h3 className="text-xl text-cyan-500 font-serif font-semibold">
          <em>Math rocks</em> can be hard...
        </h3>
        <p className="font-light">
          We all get hung up on those pesky <em>math rocks</em>, let{' '}
          <strong className="text-cyan-400 font-serif">Abacus 5e</strong> do the work for you and keep you and your game
          moving. We have put together several calculators based on
          <strong className="text-cyan-400 font-serif">"The Spread Sheet of Chaos!"</strong> and a few that make your
          quality of life as a player or DM a smooth adventure!
        </p>
      </div>
    </div>
  );
};
