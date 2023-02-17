import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Codinasion
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            We are a group of developer/programer from all over the world helps
            other developers to start their open source journey with our{" "}
            <span className="bg-green-100 rounded-md mx-1 p-1">
              Good First Issue
            </span>{" "}
            projects.
          </p>
          <p className="mt-10 text-lg leading-8 text-gray-500 sm:text-center">
            Our all time favorite repo by developers is{" "}
            <Link
              href="https://github.com/codinasion/program"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-500 rounded-md mx-1 p-1 bg-slate-200"
            >
              Program
            </Link>
            , offer you every type of programming in multiple languages. And
            codinasion is open-source it means any developer who know
            programming can contribute 🤗
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <Link
              href="https://github.com/codinasion/program"
              target="_blank"
              className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
            >
              Contribute Now
            </Link>
            <Link
              href="https://github.com/codinasion/.github/issues/new?assignees=&labels=welcome&template=invitation.yml&title=Please+invite+me+to+Codinasion"
              target="_blank"
              className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              🤗 Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
