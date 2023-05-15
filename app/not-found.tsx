"use client";

import { useSelectedLayoutSegments } from 'next/navigation';
import BasicLink from "./_components/Links&Btns/BasicLink";

export default function NotFound() {
  const segments = useSelectedLayoutSegments()

  return (
    <div className="w-full min-h-fit h-[70vh] py-20 lg:h-screen flex flex-col items-center justify-center text-center text-black dark:text-white space-y-2">
      <h2 className="text-3xl font-extrabold">
        Couldn&apos;t find
        <span className='animate-glowTextDark dark:animate-glowTextLight'>&quot;{segments[segments.length - 1]}&quot;</span>!
      </h2>
      <p>Try searching again using a different speling or keyword.</p>

      <div className='flex items-center justify-center gap-2'>

        <BasicLink href={"/"} title={"home"}>Home</BasicLink>
        <BasicLink href={`/${segments[0]}`} title={segments[0]} style={'captlize '}>{segments[0]}</BasicLink>
      </div>
    </div>
  );
}