import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import { Hero } from '@app/components/dice/Hero';
import { RollCard } from '@app/components/dice/RollCard';
import { Navbar } from '@app/components/Navbar';

const Dice: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen bg-gray-800">
      <Navbar />
      <Hero />
      <div>
        <RollCard />
      </div>
    </div>
  </Fragment>
);

export default Dice;
