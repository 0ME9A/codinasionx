import { useSelectedLayoutSegments } from 'next/navigation';
import BasicLink from '../Links&BtnsComp/BasicLink';


export default function NotFound() {
  const segments = useSelectedLayoutSegments()

  return (
    <section className="w-full min-h-fit h-[70vh] py-20 lg:h-screen flex flex-col items-center justify-center text-center text-black dark:text-white space-y-2">
      <h2 className="text-3xl font-extrabold">
        Couldn&apos;t find
        <span className='animate-glowTextDark dark:animate-glowTextLight'>&quot;{segments[segments.length - 1]}&quot;</span>!
      </h2>
      <p>Try searching again using a different speling or keyword.</p>

      <ul className='flex items-center justify-center gap-2'>
        <li>
          <BasicLink href={"/"} title={"home"}>Home</BasicLink>
        </li>
        <li>
          <BasicLink href={`/${segments[0]}`} title={segments[0]} style={'captlize '}>{segments[0]}</BasicLink>
        </li>
      </ul>
    </section>
  );
}