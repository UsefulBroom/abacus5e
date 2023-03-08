import { FC } from 'react';
import Link from 'next/link';
import { GiChest, GiDiceTwentyFacesTwenty, GiScrollUnfurled, GiStandingPotion } from 'react-icons/gi';

export const Featured: FC = () => {
  return (
    <div className="mx-5 mt-3 font-serif">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-cyan-500">Players</h2>
        <p>Here is what is free.</p>
      </div>
      <div className="p-2 mt-3">
        <ul className="flex flex-wrap justify-evenly">
          <li>
            <Link href="#">
              <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
                <GiDiceTwentyFacesTwenty className="text-5xl text-cyan-300" />
                <h3 className="text-xl font-semibold text-cyan-500">Roll Generator</h3>
                <p className="w-48 mt-2 text-lg text-center">
                  Simulate the dice roll by using a true random number generator.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
              <GiStandingPotion className="text-5xl text-cyan-300" />
              <h3 className="text-xl font-semibold text-cyan-500">Potions</h3>
              <p className="w-48 mt-2 text-lg text-center">Craft Poisons or Potions, and calculate potion strength.</p>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
              <GiChest className="text-5xl text-cyan-300" />
              <h3 className="text-xl font-semibold text-cyan-500">Item Search</h3>
              <p className="w-48 mt-2 text-lg text-center">
                Cant remember how much a ration costs? We got you covered.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700">
              <GiScrollUnfurled className="text-5xl text-cyan-300" />
              <h3 className="text-xl font-semibold text-cyan-500">Spell Search</h3>
              <p className="w-48 mt-2 text-lg text-center">
                Learn all the knowledge you need to cast a spell, and its cost.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
