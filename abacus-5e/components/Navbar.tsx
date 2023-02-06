import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiCastle, GiDiceTwentyFacesTwenty, GiStandingPotion } from 'react-icons/gi';
import Logo from '@app/public/images/abacus-sm.png';

export const Navbar: FC = () => {
  return (
    <header className="">
      <div className="bg-gray-900 backdrop-blur-sm shadow-md shadow-cyan-700">
        <div className="flex flex-row items-baseline justify-between">
          <div className="flex flex-row items-baseline">
            <Image className="mt-2 ml-2" src={Logo} width={40} alt="Logo" />
            <h1 className="font-semibold text-2xl pl-2 text-cyan-500 font-serif">Abacus 5e</h1>
          </div>
          <div className="py-1">
            <ul className="flex flex-row">
              <li>
                <Link
                  className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group items-baseline"
                  href="/"
                >
                  <GiCastle className="mr-2 text-xl" />
                  <h2 className="font-light">Home</h2>
                </Link>
              </li>

              <li>
                <Link
                  className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group items-baseline"
                  href="/dice"
                >
                  <GiDiceTwentyFacesTwenty className="mr-2 text-xl" />
                  <h2 className="font-light">Roll Dice</h2>
                </Link>
              </li>

              <li>
                <Link
                  className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group items-baseline"
                  href="#"
                >
                  <GiStandingPotion className="mr-2 text-xl" />
                  <h2 className="font-light">Potions</h2>{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
