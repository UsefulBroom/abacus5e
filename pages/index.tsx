import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo as Meta } from 'next-seo';
import Image from 'next/image';
import { DMFeatures } from '@app/components/home/DMFeatures';
import { Featured } from '@app/components/home/Featured';
import { Hero } from '@app/components/home/Hero';

const IndexPage: NextPage = () => (
  <Fragment>
    <Meta title="Abacus 5e" />
    <div className="h-auto bg-black">
      <Hero />
      <DMFeatures />
      <Featured />
    </div>
  </Fragment>
);

export default IndexPage;
