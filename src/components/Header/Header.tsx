import Link from "next/link";
import { LinkBlock } from "./components/LinkBlock";
import { UserBlock } from "./components/UserBlock";

export default function Header() {
  return (
    <header className='p-5 text-white mx-auto lg:max-w-1140'>
      <div className='max-w-7xl mx-auto'>
        <nav className='flex flex-col lg:flex-row   bg-teal-500 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link href='/'>
              <img
                src='https://static.coherentcommons.com/africacommons.net/img/logos/logo.svg'
                alt='Africa Commons'
                width='160'
                height='63'
                className='logo ml-0 mr-4 p-2'
              />
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:flex lg:items-center lg:justify-between'>
            <LinkBlock />
            <UserBlock />
          </div>
        </nav>
      </div>
    </header>
  );
}
