import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import Image from 'next/image';
import { Featured } from '@app/components/Featured';
import { Hero } from '@app/components/Hero';
import { Navbar } from '@app/components/Navbar';

const IndexPage: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen">
      <Navbar />
      <Hero />
      <Featured />
    </div>
  </Fragment>
);

export default IndexPage;
