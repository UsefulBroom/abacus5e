import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiCastle, GiDiceTwentyFacesTwenty, GiStandingPotion } from 'react-icons/gi';
import Logo from '@app/public/images/abacus-sm.png';

export const Navbar: FC = () => {
  const router = useRouter();
  return (
    <header className="">
      <div className="bg-gray-900 shadow-md backdrop-blur-sm shadow-cyan-700">
        <div className="flex flex-row items-baseline justify-between">
          <div className="flex flex-row items-baseline">
            <Image className="mt-2 ml-2" src={Logo} width={40} alt="Logo" />
            <h1 className="pl-2 font-serif text-2xl font-semibold text-cyan-500">Abacus 5e</h1>
          </div>
          <div className="py-1">
            <ul className="flex flex-row">
              <li>
                <Link
                  className={
                    router.pathname == '/' ? 'text-cyan-400 inline-flex border-b-2 border-cyan-400 rounded-t-lg' : ''
                  }
                  href="/"
                >
                  <div className="inline-flex items-baseline p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group">
                    <GiCastle className="mr-2 text-xl" />
                    <h2 className="font-light">Home</h2>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  className={
                    router.pathname == '/dice'
                      ? 'text-cyan-400 inline-flex border-b-2 border-cyan-400 rounded-t-lg'
                      : ''
                  }
                  href="/dice"
                >
                  <div className="inline-flex items-baseline p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group">
                    <GiDiceTwentyFacesTwenty className="mr-2 text-xl" />
                    <h2 className="font-light">Roll Dice</h2>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  className="inline-flex items-baseline p-4 border-b-2 border-transparent rounded-t-lg hover:text-cyan-400 hover:border-cyan-400 dark:hover:text-cyan-400 group"
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