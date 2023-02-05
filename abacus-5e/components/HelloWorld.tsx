import { FC } from 'react';

export const HelloWorld: FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="p-3 m-10">
      <h2 className="text-lg font-bold text-black md:text-2xl">This is </h2>
      <h2 className="text-lg font-bold text-black md:text-2xl">Abacus 5e</h2>
    </div>
  </div>
);
