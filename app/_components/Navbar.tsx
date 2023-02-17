"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

import logo from "@/public/logo.png";
import navbarLinks from "@/data/navbarLinks";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <Announcement /> */}
      <div className="px-6 py-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" className="-m-1.5 p-1.5" aria-label="Codinasion">
                <span className="sr-only">Codinasion</span>
                <Image
                  src={logo}
                  alt="Logo"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
              </Link>
              <Link href="/" className="-m-1.5 p-1.5" aria-label="Codinasion">
                <span className="sr-only">Codinasion</span>
                <span className="inline-block font-bold text-2xl pl-2">
                  Codinasion
                </span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navbarLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  {item.name}
                </Link>
              ))}
            </div> */}
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link
                href="https://github.codinasion.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                <FaGithub className="inline-block font-bold text-xl" />
              </Link>
              <Link
                href="https://twitter.codinasion.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                <FaTwitter className="inline-block font-bold text-xl" />
              </Link>
              <Link
                href="https://discord.codinasion.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                <FaDiscord className="inline-block font-bold text-xl" />
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    aria-label="Codinasion"
                  >
                    <span className="sr-only">Codinasion</span>
                    <Image
                      src={logo}
                      alt="Logo"
                      height={32}
                      width={32}
                      className="rounded-full"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    aria-label="Codinasion"
                  >
                    <span className="sr-only">Codinasion</span>
                    <span className="inline-block font-bold text-2xl pl-2">
                      Codinasion
                    </span>
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  {/* <div className="space-y-2 py-6">
                    {navbarLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div> */}
                  <div className="py-6">
                    <Link
                      href="https://github.codinasion.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg mx-4 px-3 my-4 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      <FaGithub className="inline-block font-bold text-xl" />
                      <span className="px-1">Github</span>
                      <span className="sr-only">Github</span>
                    </Link>
                    <Link
                      href="https://twitter.codinasion.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg mx-4 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      <FaTwitter className="inline-block font-bold text-xl" />
                      <span className="px-1">Twitter</span>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="https://discord.codinasion.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg mx-4 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      <FaDiscord className="inline-block font-bold text-xl" />
                      <span className="px-1">Discord</span>
                      <span className="sr-only">Discord</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
}
