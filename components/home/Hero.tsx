import { FC } from 'react';
import Image from 'next/image';
import LogoHero from '@app/public/images/abacus-sm.png';

export const Hero: FC = () => {
  return (
    <div className="h-auto bg-top bg-no-repeat bg-cover bg-hero">
      <div className="py-3 bg-gray-900 md:grid md:grid-cols-6 md:gap-2 opacity-80 h-80">
        <div className="flex flex-col justify-center object-cover col-start-2 col-end-3 mt-5 font-serif text-cyan-400">
          <div className="flex flex-col items-center justify-center">
            <Image src={LogoHero} width={60} height={60} alt="Abacus 5e Logo" />
            <h2 className="pl-2 text-2xl lg:text-4xl">Abacus 5e</h2>
          </div>
        </div>
        <div className="grid col-start-4 col-end-6 py-5 ml-5">
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-lg font-semibold leading-tight lg:text-2xl text-cyan-500">
              <em>Math rocks</em> can be hard...
            </h3>
            <p className="pr-2 font-light leading-tight md:p-0 md:leading-snug lg:text-lg">
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
