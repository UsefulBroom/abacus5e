import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className="bg-bottom bg-no-repeat bg-cover h-80 bg-hero">
      <div className="grid grid-cols-6 gap-2 py-3 bg-gray-900 opacity-80 h-80">
        <div className="flex flex-col items-center justify-center object-cover col-start-2 col-end-3 mt-5 font-serif text-cyan-400">
          <div className="flex flex-col items-center justify-center">
            <h2 className="pl-2 text-3xl">Roll Generator</h2>
          </div>
          <div className="grid col-start-2 col-row-2">
            <p className="text-cyan-200">Let the Gods decide your fate.</p>
          </div>
        </div>
        <div className="grid col-start-4 col-end-6 py-5 ml-5">
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-xl font-semibold text-cyan-500">Your Adventure has lead you here,</h3>
            <p className="font-light text-cyan-200">
              Ill add something clever and witty at some point but today is not that day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
