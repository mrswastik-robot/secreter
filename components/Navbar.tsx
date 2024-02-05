import Link from "next/link";
import React from "react";
import { ThemeToggler } from '@/components/ThemeToggler';

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
        <Link href="/gallery" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            secreter
          </p>
        </Link>
        <div className="flex items-center">
          
          <ThemeToggler className="mr-3" />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;