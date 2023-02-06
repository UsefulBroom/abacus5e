import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import Image from 'next/image';
import { Hero } from '@app/components/Hero';
import { Navbar } from '@app/components/Navbar';
import LogoHero from '@app/public/images/abacus-sm.png';

const IndexPage: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen bg-gray-800">
      <Navbar />
      <Hero />
      {/* <div className="grid grid-cols-6 gap-2">
        <div className="flex flex-col mt-5 col-start-2 col-end-3 justify-center items-center">
          <h2>Welcome to</h2>
          <div className="flex items-baseline">
            <Image src={LogoHero} width={60} height={60} alt="Abacus 5e Logo" />
            <h2 className="pl-2 text-3xl">Abacus 5e</h2>
          </div>
        </div>
        <div className="grid col-start-4 col-end-6 ml-5 py-5">
          <h3 className="text-xl text-cyan-500 font-semibold">
            <em>Math rocks</em> can be hard...
          </h3>
          <p className="font-light">
            We all get hung up on those pesky <em>math rocks</em>, let{' '}
            <strong className="text-cyan-400">Abacus 5e</strong> do the work for you and keep you and your game moving.
            We have put together several calculators based on
            <strong className="text-cyan-400">"The Spread Sheet of Chaos!"</strong> and a few that make your quality of
            life as a player or DM a smooth adventure!
          </p>
        </div>
      </div> */}
    </div>
  </Fragment>
);

export default IndexPage;
