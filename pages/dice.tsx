import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import { Hero } from '@app/components/dice/Hero';
import { Navbar } from '@app/components/Navbar';

const Dice: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen bg-gray-800">
      <Navbar />
      <Hero />
      <div>
        <h2>Roll Generator</h2>
        <p>Lets let the Gods decide your fate.</p>
        <p>Tymora be with you.</p>
      </div>
    </div>
  </Fragment>
);

export default Dice;
