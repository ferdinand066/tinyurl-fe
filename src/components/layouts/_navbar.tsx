import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Itim } from '@next/font/google'
import { PAGES } from '@/static/pages';
import Link from 'next/link';

// If loading a variable font, you don't need to specify the font weight
const ccFont = Itim({ subsets: ['latin'], weight: '400' });

const navigation = [
  { name: 'Tiny Url', href: PAGES.TINY_URL.INDEX },
  { name: 'Rename Url', href: PAGES.RENAME_URL.INDEX },
  { name: 'QR Code', href: PAGES.QR_CODE_URL.INDEX },
]
export default function Navbar() {
  return (
    <Popover as="header" className="relative">
      {({ open }) => (
        <>
          <div className="py-6 bg-gray-900">
            <nav
              className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href={PAGES.INDEX}>
                    <h4 className={ccFont.className + ' h-12 pt-1 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700'}>srt.fege</h4>
                  </Link>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                {/* <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
                >
                  Start free trial
                </a> */}
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <Link href={PAGES.INDEX}>
                    <h4 className={ccFont.className + ' h-12 pt-1 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700'}>srt.fege</h4>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="px-5 mt-6">
                    <a
                      href="#"
                      className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </a>
                  </div>
                  <div className="px-5 mt-6">
                    <p className="text-base font-medium text-center text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
