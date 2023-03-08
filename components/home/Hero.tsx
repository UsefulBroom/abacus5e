import { FC } from 'react';
import Image from 'next/image';
import LogoHero from '@app/public/images/abacus-sm.png';

export const Hero: FC = () => {
  return (
    <div className="bg-top bg-no-repeat bg-cover h-80 bg-hero">
      <div className="grid grid-cols-6 gap-2 py-3 bg-gray-900 opacity-80 h-80">
        <div className="flex flex-col items-center justify-center object-cover col-start-2 col-end-3 mt-5 font-serif text-cyan-400">
          <div className="flex flex-col items-center justify-center">
            <Image src={LogoHero} width={60} height={60} alt="Abacus 5e Logo" />
            <h2 className="pl-2 text-3xl">Abacus 5e</h2>
          </div>
          <div className="grid col-start-2 col-row-2">
            {/* Get Started | Jump to login | Create New User */}
            <div className="flex">
              <button
                className="px-1 mx-2 mt-3 border-2 border-solid text-emerald-600 border-emerald-600 rounded-xl hover:shadow-sm hover:shadow-emerald-700 hover:inset-3 hover:text-emerald-400 hover:bg-teal-800 hover:border-emerald-400"
                type="submit"
              >
                Create New
              </button>
              <button
                className="px-1 mx-2 mt-3 border-2 border-solid text-sky-600 border-sky-600 rounded-xl hover:shadow-sm hover:shadow-cyan-700 hover:inset-3 hover:text-cyan-400 hover:bg-sky-800 hover:border-cyan-400"
                type="submit"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="grid col-start-4 col-end-6 py-5 ml-5">
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-xl font-semibold text-cyan-500">
              <em>Math rocks</em> can be hard...
            </h3>
            <p className="font-light">
              We all get hung up on those pesky <em>math rocks</em>, let{' '}
              <strong className="font-serif text-cyan-400">Abacus 5e</strong> do the work for you and keep you and your
              game moving. We have put together several calculators based on &apos;
              <strong className="font-serif text-cyan-400">The Spread Sheet of Chaos!</strong>&apos; and a few that make
              your quality of life as a player or DM a smooth adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
