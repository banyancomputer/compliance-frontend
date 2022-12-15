import React from 'react';
import Head from 'next/head';

export interface IPage extends React.ComponentPropsWithoutRef<'head'> {
  title: string;
  description: string;
  url: string;
}

export const Page: React.FC<IPage> = (props: IPage) => {
  return (
    <div>
      <Head>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
      </Head>
      {props.children}
    </div>
  );
};

export default Page;
