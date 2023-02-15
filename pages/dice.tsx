import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import { Navbar } from '@app/components/Navbar';

const Dice: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen bg-gray-800">
      <Navbar />
    </div>
  </Fragment>
);

export default Dice;
