"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BurgerIcon } from "../_shared/icons/BurgerIcon";
import { LinkBlock } from "./components/LinkBlock";
import { UserBlock } from "./components/UserBlock";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className='pt-0 p-5 text-gray-500 mx-auto lg:max-w-1140'>
      <div className='max-w-7xl mx-auto'>
        <nav className='flex flex-col lg:flex-row p-6'>
          <div className='flex items-center justify-between text-gray-500 mr-6 lg:justify-between'>
            <Link href='/'>
              <img
                src='https://static.coherentcommons.com/africacommons.net/img/logos/logo.svg'
                alt='Africa Commons'
                width='160'
                height='63'
                className='logo ml-0 mr-4 p-2'
              />
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
              <BurgerIcon />
            </div>
          </div>
          {isOpen && (
            <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:flex lg:items-center lg:justify-between'>
              <LinkBlock />
              <UserBlock />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
