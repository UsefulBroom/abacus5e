import { FC } from 'react';
import Link from 'next/link';
import { GiAbacus, GiBeastEye, GiCauldron, GiShop } from 'react-icons/gi';

// bg-center bg-no-repeat bg-cover bg-dmFeatured
export const DMFeatures: FC = () => {
  return (
    <div className="mx-5 mt-3 font-serif ">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-cyan-500">Dungeon Masters</h2>
          <p>Take your game to the next level.</p>
        </div>
        <div className="p-2 mt-3">
          <ul className="flex flex-col ">
            <div className="flex flex-row flex-wrap justify-evenly">
              <li className="w-1/2">
                <Link href="#">
                  <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
                    <GiAbacus className="text-5xl text-cyan-300" />
                    <h3 className="text-xl font-semibold text-cyan-500">Battle Calculator</h3>
                    <p className="mt-2 text-lg font-light text-center">
                      Calculate each encounter with precision and give yourself the ability to drop initiative any time,
                      any where.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="w-1/2">
                <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
                  <GiBeastEye className="text-5xl text-cyan-300" />
                  <h3 className="text-xl font-semibold text-cyan-500">Random Encounter</h3>
                  <p className="mt-2 text-lg font-light text-center">
                    A quick option to help fill out encounters and keep the game exciting.
                  </p>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700 hover:shadow-inner hover:shadow-cyan-800">
                  <GiCauldron className="text-5xl text-cyan-300" />
                  <h3 className="text-xl font-semibold text-cyan-500">Potion Crafting</h3>
                  <p className="w-48 mt-2 text-lg font-light text-center">
                    Let your players feel creative with this tool built to help you craft potions on the fly.
                  </p>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex flex-col items-center justify-center p-2 m-2 border-transparent w-60 hover:border-4 hover:rounded-md hover:border-cyan-700">
                  <GiShop className="text-5xl text-cyan-300" />
                  <h3 className="text-xl font-semibold text-cyan-500">Shop Generator</h3>
                  <p className="w-48 mt-2 text-lg font-light text-center">
                    Give your players somewhere to spend coin without all the prep work.
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
