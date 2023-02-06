import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import Image from 'next/image';
import { Hero } from '@app/components/Hero';
import { Login } from '@app/components/home/login';
import { Navbar } from '@app/components/Navbar';

const IndexPage: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-screen bg-gray-800">
      <Navbar />
      <Hero />
      <Login />
    </div>
  </Fragment>
);

export default IndexPage;
